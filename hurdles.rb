#!/bin/ruby

n,k = gets.strip.split(' ')
n = n.to_i
k = k.to_i
height = gets.strip
height = height.split(' ').map(&:to_i)

largest = height.max

if largest > k
    puts largest - k
else
    puts 0
end