class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self, value):
        self.head = Node(value)

    def append(self, value):
        cur = self.head
        while cur.next is not None:
            cur = cur.next
        cur.next = Node(value)

    def print_all(self):
        cur = self.head
        while cur is not None:
            print(cur.data)
            cur = cur.next

    def get_node(self, index):
        node = self.head
        count = 0
        while count < index:
            node = node.next
            count += 1
        return node

    # 원하는 위치에 노드 추가
    # index-1 같은 연산을 할 때에 index가 0인 경우에는 어떻게 될까 꼭 생각해봐야한다.
    # get_node(-1)이 호출되면 원하지 않게 동작할테니 예외처리를 꼭 추가해야한다.
    # 아니면 처음부터 더미노드를 만들어도 좋다.
    def add_node(self, index, value):
        new_node = Node(value)
        if index == 0:
            new_node.next = self.head
            self.head = new_node
            return

        node = self.get_node(index-1)
        next_node = node.next
        node.next = new_node
        new_node.next = next_node

# [5] -> [6] -> [12] -> [8]
linked_list = LinkedList(5)
linked_list.append(12)
linked_list.append(8)
linked_list.add_node(1, 6)
linked_list.print_all()