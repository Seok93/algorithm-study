# 스택 직접 구현해보기

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Stack:
    def __init__(self):
        self.head = None

    def push(self, value):
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node

    # pop 기능 구현
    def pop(self):
        if self.is_empty():
            return "Stack is empty"

        del_node = self.head
        self.head = self.head.next

        return del_node.data

    def peek(self):
        if self.is_empty():
            return "Stack is empty"

        return self.head.data

    # is_empty 기능 구현
    def is_empty(self):
        return self.head is None

stack = Stack()
print(stack.is_empty())
stack.push(3)
stack.push(4)
print(stack.peek())
print(stack.pop())
print(stack.peek())
print(stack.pop())
print(stack.peek())
print(stack.pop())