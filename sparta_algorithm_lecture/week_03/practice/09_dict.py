# dict(=해쉬) 구현
# 아래의 문제점은 해쉬충돌이 일어나서, 나중에 들어온 데이터가 덮어 씌운다. (결국 인덱스 값으로 변환하기 때문에 해쉬 충돌이남)
class Dict:
    def __init__(self):
        self.items = [None] * 8

    def put(self, key, value):
        index = hash(key) % len(self.items)
        self.items[index] = value

    def get(self, key):
        index = hash(key) % len(self.items)
        return self.items[index]


my_dict = Dict()
my_dict.put("test", 3)
print(my_dict.get("test"))