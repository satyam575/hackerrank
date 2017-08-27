#!/bin/ruby

def simpleArraySum(n, ar)
ar.sum
end

n = gets.strip.to_i
ar = gets.strip
ar = ar.split(' ').map(&:to_i)
result = simpleArraySum(n, ar)
puts result;
