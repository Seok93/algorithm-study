# Dict(해시) 구현
# 링크드리스트를 이용하여 해쉬 충돌 해결 (Chaining 기법)

class LiknedTuple:
    def __init__(self):
        self.items = list()

    # key -> ksdfksdf8 -> self.items[7] = [("ksdfksdf8", "test")]
    # key -> ksdfksdfk -> self.items[7] = [("ksdfksdf8", "test")] -> [("ksdfksdfk", "test33")]
    def add(self, key, value):
        self.items.append((key, value))

    def get(self, key):
        for k, v in self.items:
            if key == k:
                return v

class LinkedDict:
    def __init__(self):
        self.items = []
        for i in range(8):
            self.items.append(LiknedTuple())

    def put(self, key, value):
        index = hash(key) % len(self.items)
        self.items[index].add(key, value)

    def get(self, key):
        index = hash(key) % len(self.items)
        return self.items[index].get(key)