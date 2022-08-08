def solution(clothes):
    closet = {}

    for cloth, cloth_type in clothes:
        if cloth_type not in closet:
            closet[cloth_type] = 1
        else:
            closet[cloth_type] += 1

    case = 1;
    for num in closet.values():
        case *= num + 1;

    return case - 1;