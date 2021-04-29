from collections import deque

input = "abcabcabcabcdededededede"


def string_compression(string):
    all_case_comp = []      # 슬라이스 케이스별 길이 저장

    str_full_size = len(string)
    str_half_size = str_full_size // 2
    for slice_size in range(1, str_half_size + 1):
        order_queue = deque()  # 문자열 순서 보장

        count = 1
        pre_sub_str = string[0:slice_size]
        pre_idx = slice_size
        cur_idx = pre_idx + slice_size
        while cur_idx <= str_full_size:
            cur_sub_str = string[pre_idx:cur_idx]
            pre_idx = cur_idx
            cur_idx += slice_size

            if pre_sub_str == cur_sub_str:
                count += 1
            else:
                order_queue.append((count, pre_sub_str))
                pre_sub_str = cur_sub_str
                count = 1
        order_queue.append((count+1, pre_sub_str))
        
        # 남은 부분 처리
        if pre_idx < str_full_size:
            cur_sub_str = string[pre_idx]
            order_queue.append((1, cur_sub_str))

        # 슬라이스 부분을 합쳐 최종 압축문자 만들기
        comp_str = ""
        for count, sub_str in order_queue:
            if count != 1:
                comp_str += str(count)
            comp_str += sub_str

        # 압축된 문자길이 저장
        all_case_comp.append(len(comp_str))

    return min(all_case_comp)


print(string_compression(input))  # 14 가 출력되어야 합니다!