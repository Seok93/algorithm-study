# [3] -> [4]
# data, next
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self, data):
        self.head = Node(data)

    # 마지막 위치에 노드 추가
    # cur.next가 None이 되는 순간
    # 현재 가리키고 있는 대상이 맨 마지막 노드라는 것을 알 수 있다.
    def append(self, data):
        cur = self.head
        while cur.next is not None:
            cur = cur.next
        cur.next = Node(data)

    # 모든 노드 출력
    # cur.next가 None = 즉 맨 마지막 노드가 될 때까지 출력하면 된다.
    def print_all(self):
        cur = self.head
        while(cur is not None):
            print(cur.data)
            cur = cur.next

# [3] -> [4] -> [5] -> [6] -> [new]
linked_list = LinkedList(3)
linked_list.append(4)
linked_list.append(5)
linked_list.print_all()