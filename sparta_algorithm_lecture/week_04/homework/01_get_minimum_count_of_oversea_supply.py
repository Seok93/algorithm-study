# 농심 라면 공장

import heapq

ramen_stock = 4
supply_dates = [4, 10, 15]
supply_supplies = [20, 5, 10]
supply_recover_k = 30

# 1. 버틸 수 있는 기간 내에서, 최대값을 찾아내기
# 2. 해외 공장 공급 횟수 측정
def get_minimum_count_of_overseas_supply(stock, dates, supplies, k):
    count = 0   # 해외 공급 횟수

    # 공급 가능일별 공급량 측정
    date_supply_heap = list(zip(dates, supplies))
    heapq.heapify(date_supply_heap)

    while stock < k:
        # 운영 가능한 날짜까지, 공급 받을 수 있는 모든 외부 업체 선정
        can_supply_list = []
        for supply in date_supply_heap:
            if stock >= supply[0]:
                can_supply_list.append(supply)

        # 운영 가능한 기간 내에 공급이 가능한가 확인
        if not can_supply_list:
            return False

        # 업체중 가장 많이 제공 가능한 곳 + 날짜가 제일 빠른 곳
        max = 0
        for date_supply in can_supply_list:
            supply = date_supply[1]

            # 바로 충당된다면 break
            if stock+supply >= k:
                count += 1
                return count

            # 한 번에 충당 가능한 최대 공급량 확인
            if max < supply:
                max = supply

        stock += max
        count += 1

    return count

print(get_minimum_count_of_overseas_supply(ramen_stock, supply_dates, supply_supplies, supply_recover_k))