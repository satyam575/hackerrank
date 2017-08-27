#!/bin/ruby

def solve(a0, a1, a2, b0, b1, b2)
    
    totala = 0
    totalb = 0
    
    if a0 > b0
    totala = totala + 1
    end
    if a1 > b1
    totala = totala + 1
    end
    if a2 > b2
    totala = totala + 1
    end
    if b0 > a0
    totalb = totalb + 1
    end
    if b1 > a1
    totalb = totalb + 1
    end
    if b2 > a2
    totalb = totalb + 1
    end
    puts"#{totala} #{totalb}"

end

a0, a1, a2 = gets.strip.split(' ')
a0 = a0.to_i
a1 = a1.to_i
a2 = a2.to_i
b0, b1, b2 = gets.strip.split(' ')
b0 = b0.to_i
b1 = b1.to_i
b2 = b2.to_i
result = solve(a0, a1, a2, b0, b1, b2)
print result.join(" ")
