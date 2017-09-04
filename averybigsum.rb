#!/bin/ruby

def aVeryBigSum(n, ar)
    ar.sum
end

n = gets.strip.to_i
ar = gets.strip
ar = ar.split(' ').map(&:to_i)
result = aVeryBigSum(n, ar)
puts result;