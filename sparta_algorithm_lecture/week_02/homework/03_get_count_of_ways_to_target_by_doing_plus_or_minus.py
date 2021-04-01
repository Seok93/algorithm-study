numbers = [1, 1, 1, 1, 1]
target_number = 0
count = 0

def dfs(array, target, r_sum):
    if not array:
        if target == r_sum:
            global count
            count += 1
        return

    value = array[0]
    dfs(array[1:], target, r_sum + value)
    dfs(array[1:], target, r_sum - value)

def get_count_of_ways_to_target_by_doing_plus_or_minus(array, target):
    global count
    dfs(array, target, 0)

    return count


print(get_count_of_ways_to_target_by_doing_plus_or_minus(numbers, target_number))  # 5를 반환해야 합니다!