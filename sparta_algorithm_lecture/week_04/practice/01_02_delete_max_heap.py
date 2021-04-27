# 최대힙 삭제 구현
# 데이터 삽입의 시간 복잡도는 O(logN)
class MaxHeap:
    def __init__(self):
        self.items = [None]

    def insert(self, value):
        self.items.append(value)
        cur_index = len(self.items) - 1

        while cur_index > 1:  # cur_index 가 1이 되면 정상을 찍은거라 다른 것과 비교 안하셔도 됩니다!
            parent_index = cur_index // 2
            if self.items[parent_index] < self.items[cur_index]:
                self.items[parent_index], self.items[cur_index] = self.items[cur_index], self.items[parent_index]
                cur_index = parent_index
            else:
                break

    # 1. 맨 뒤에 있는 원소와 루트 노드를 교환한다.
    # 2. 그리고 맨 뒤에 있는 노드(루트노드)를 제거한다. (별도로 저장하여 반환할 것)
    # 3. 변경된 루트 노드와 자식들과 비교한다.
    # 4. 자식이 더 크다면, 그 노드와 교환한다.
    # 5. 이 과정을 자식들이 더 작거나, 바닥 레벨까지 왔으면 멈춘다.
    # 6. 그리고 2번에 저장해둔 노드를 반환한다.
    def delete(self):
        # 루트 노드와 마지막 노드의 교체
        self.items[1], self.items[-1] = self.items[-1], self.items[1]

        # 마지막 대상 제거
        delete_node = self.items.pop()
        last_idx = len(self.items) - 1

        cur_idx = 1
        while last_idx >= cur_idx:
            target_idx = None
            left_child_idx = cur_idx * 2
            right_child_idx = cur_idx * 2 + 1

            # 좌측 노드가 있는지 확인
            if left_child_idx > last_idx:
                break

            # 우측 노드가 있는지 확인
            if right_child_idx > last_idx:
                target_idx = left_child_idx
            else:
                # 좌측과 우측 중 누가 더 큰지 비교
                if self.items[left_child_idx] >= self.items[right_child_idx]:
                    target_idx = left_child_idx
                else:
                    target_idx = right_child_idx

            # 자식 노드와 비교
            if self.items[target_idx] > self.items[cur_idx]:
                self.items[target_idx], self.items[cur_idx] = self.items[cur_idx], self.items[target_idx]
                cur_idx = target_idx
            else:
                break

        return delete_node  # 8 을 반환해야 합니다.


max_heap = MaxHeap()
max_heap.insert(8)
max_heap.insert(7)
max_heap.insert(6)
max_heap.insert(2)
max_heap.insert(5)
max_heap.insert(4)
print(max_heap.items)  # [None, 8, 7, 6, 2, 5, 4]
print(max_heap.delete())  # 8 을 반환해야 합니다!
print(max_heap.items)  # [None, 7, 5, 6, 2, 4]