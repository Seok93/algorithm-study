# 쓱 최대로 할인 적용하기

shop_prices = [30000, 2000, 1500000]
user_coupons = [20, 40]

def merge(arr1, arr2):
    result = []
    arr1_idx = 0
    arr2_idx = 0
    arr1_len = len(arr1)
    arr2_len = len(arr2)

    while arr1_idx < arr1_len and arr2_idx < arr2_len:
        if arr1[arr1_idx] < arr2[arr2_idx]:
            result.append(arr1[arr1_idx])
            arr1_idx += 1
        else:
            result.append(arr2[arr2_idx])
            arr2_idx += 1

    if arr1_idx == arr1_len:
        while arr2_idx < arr2_len:
            result.append(arr2[arr2_idx])
            arr2_idx += 1

    if arr2_idx == arr2_len:
        while arr1_idx < arr1_len:
            result.append(arr1[arr1_idx])
            arr1_idx += 1

    return result

def merge_sort(array):
    arr_len = len(array)
    if arr_len <= 1:
        return array

    mid = arr_len // 2
    left_arr = merge_sort(array[:mid])
    right_arr = merge_sort(array[mid:])

    return merge(left_arr, right_arr)

def get_max_discounted_price(prices, coupons):
    prices = merge_sort(prices)
    coupons = merge_sort(coupons)
    result = 0

    while len(coupons) != 0:
        price = prices.pop()
        coupon = coupons.pop()
        result += price * (100 - coupon) / 100

    for price in prices:
        result += price

    return result


print(get_max_discounted_price(shop_prices, user_coupons))  # 926000 이 나와야 합니다.