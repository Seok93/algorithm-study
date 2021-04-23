# 최대힙 데이터 삽입 구현
# 데이터 삽입의 시간 복잡도는 O(logN)
class MaxHeap:
    def __init__(self):
        self.items = [None]

    # 1. 새노드를 맨 끝에 추가한다.
    # 2. 지금 넣은 새노드를 부모와 비교한다. 만약 부모보다 크다면 교체한다.
    # 3. 이 과정을 최상위 노드까지 반복한다.
    def insert(self, value):
        self.items.append(value)

        # 초기 위치 찾기
        cur_idx = len(self.items) - 1

        # 자기 위치 찾기
        while cur_idx > 1:
            parent_idx = cur_idx // 2
            if self.items[parent_idx] < self.items[cur_idx]:
                self.items[parent_idx], self.items[cur_idx] = self.items[cur_idx], self.items[parent_idx]
                cur_idx = parent_idx
            else:
                break


max_heap = MaxHeap()
max_heap.insert(3)
max_heap.insert(4)
max_heap.insert(2)
max_heap.insert(9)
print(max_heap.items)  # [None, 9, 4, 2, 3] 가 출력되어야 합니다!