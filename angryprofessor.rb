#!/bin/ruby

t = gets.strip.to_i
for a0 in (0..t-1)
    n,k = gets.strip.split(' ')
    n = n.to_i
    k = k.to_i
    a = gets.strip
    a = a.split(' ').map(&:to_i)
    
    count = 0
    for i in a
        if i == 0 || i < 0
            count = count + 1
        end
    end
    
    if count >= k
        puts "NO"
    else
        puts "YES"
    end
  
end