input = "01110"


def find_count_to_turn_out_to_all_zero_or_all_one(string):
    # 전환 횟수
    zero_cnt = 0
    one_cnt = 0

    toggle_letter = string[0]
    for i in range(len(string)):            # N: string 개수만큼 반복
        # 뒤집기 가능성 판단
        if toggle_letter != string[i]:
            if string[i] == '0':
                one_cnt += 1
                toggle_letter = string[i]
            elif string[i] == "1":
                zero_cnt += 1
                toggle_letter = string[i]

    return min(zero_cnt, one_cnt)           # 시간복잡도: O(N)

result = find_count_to_turn_out_to_all_zero_or_all_one(input)
print(result)