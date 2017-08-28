#!/bin/ruby

n,k = gets.strip.split(' ')
n = n.to_i
k = k.to_i
c = gets.strip
c = c.split(' ').map(&:to_i)

energy = 100

0.step(c.length, k).each do |i|
    x = c[i]
    if x == 0
        energy = energy - 1
    elsif x == 1
        energy = energy - 3
    end
end

puts energy