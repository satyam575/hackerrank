#!/bin/ruby

def kangaroo(x1, v1, x2, v2)
    #oneStart == x1
    #twoStart == x2
    #onePace ==  v1
    #twoPace == v2
    if (v1 > v2 and ((x2 - x1) % (v1 - x2) == 0))
    puts "YES"
else
    puts "NO"
end
end

x1, v1, x2, v2 = gets.strip.split(' ')
x1 = x1.to_i
v1 = v1.to_i
x2 = x2.to_i
v2 = v2.to_i
result = kangaroo(x1, v1, x2, v2)
puts result;