n = int(input())
sl = []
for _ in range(n):
    s = input()
    sl.append(s)
c = input()

lenli = []
cnt = 0
for elem in sl:
    if c in elem:
        cnt += 1
        lenli.append(len(elem))

print(f'{cnt} {sum(lenli)/cnt:.2f}')