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

    # 노드 삭제
    # 똑같이 index-1 연산을 보고 index가 0인 경우의 처리를 생각해봐야한다.
    def delete_node(self, index):
        if index == 0:
            self.head = self.head.next
            return

        prev_node = self.get_node(index-1)
        del_node = prev_node.next
        prev_node.next = del_node.next


# [5] -> [6] -> [12] -> [8]
linked_list = LinkedList(5)
linked_list.append(12)
linked_list.append(8)
linked_list.add_node(1, 6)
linked_list.delete_node(0)
linked_list.print_all()