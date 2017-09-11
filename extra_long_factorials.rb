#!/bin/ruby

n = gets.strip.to_i

total = 1

(1..n).each do |i|
    total = total * i
end

puts total
