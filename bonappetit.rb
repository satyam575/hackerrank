#!/bin/ruby

def bonAppetit(n, k, b, ar)
    
    k = ar[k]
    index = ar.index k
    ar.slice!(index, 1)
    ar_sum = ar.sum
    
    if ar_sum / 2 == b
        puts "Bon Appetit"
    else
        puts b - ar_sum / 2
    end
    
end

n, k = gets.strip.split(' ')
n = n.to_i
k = k.to_i
ar = gets.strip
ar = ar.split(' ').map(&:to_i)
b = gets.strip.to_i
result = bonAppetit(n, k, b, ar)
puts result;