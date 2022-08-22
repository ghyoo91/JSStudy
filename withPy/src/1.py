import collections
import time
from typing import Deque

def time_solution(string:str) -> None:
    start = time.time()
    print(solution(string))
    end = time.time()

    print(f"{end - start:.5f} sec")

def solution(string):
    str = []

    for char in string:
        if char.isalnum():
            str.append(char.lower())

    while len(str) > 1:
        if str.pop(0) != str.pop():
            return False

    return True

def solution1(string:str) -> bool:
    str: Deque = collections.deque()

    for char in string:
        if char.isalnum():
            str.append(char.lower())

    while len(str) > 1:
        if str.popleft() != str.pop():
            return False

    return True

time_solution("A man, a plan, a canal: Panama")
time_solution("race a car")
print(solution1("A man, a plan, a canal: Panama"))
