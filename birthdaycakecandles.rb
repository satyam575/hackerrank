#!/bin/ruby

def birthdayCakeCandles(n, ar)
    sum = 0;
    tallest = ar.max
    for i in ar do
    sum = sum + 1 if i == tallest
    end
    puts sum
end

n = gets.strip.to_i
ar = gets.strip
ar = ar.split(' ').map(&:to_i)
result = birthdayCa