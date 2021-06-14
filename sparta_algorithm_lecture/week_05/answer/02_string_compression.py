input = "abcabcabcabcdededededede"

# 1로 잘라야할지, 2로 잘라야할지... 어떻게 잘라야하는지 확인해야함
# 결국 자를 수 있는 모든 케이스를 확인해서 최솟값을 반환해달라는 의미이다.
# 압축이기 때문에 반절 이상의 문자열의 케이스는 필요없다.
def string_compression(string):
    n = len(string)
    compression_length_array = []
    for split_size in range(1, n // 2 + 1):
        splited = [
            string[i:i+split_size] for i in range(0, n, split_size)
        ]

        count = 1
        compressed = ""
        for j in range(1, len(splited)):
            prev, cur = splited[j-1], splited[j]
            if prev == cur:
                count += 1
            else:
                if count > 1:
                    compressed += str(count)
                compressed += prev
                count = 1
        if count > 1:
            compressed += str(count)
        compressed += splited[-1]

        compression_length_array.append(len(compressed))
    return min(compression_length_array)


print(string_compression(input))  # 14 가 출력되어야 합니다!