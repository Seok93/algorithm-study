shop_menus = ["만두", "떡볶이", "오뎅", "사이다", "콜라"]
shop_orders = ["오뎅", "콜라", "만두"]


def is_available_to_order(menus, orders):
    menus.sort()
    for order in orders:
        start_idx = 0
        end_idx = len(menus) - 1
        while True:
            if start_idx > end_idx:
                return False

            mid_idx = (start_idx + end_idx) // 2
            if order > menus[mid_idx]:
                start_idx = mid_idx + 1
            elif order < menus[mid_idx]:
                end_idx = mid_idx - 1
            else:
                break

    return True


result = is_available_to_order(shop_menus, shop_orders)
print(result)