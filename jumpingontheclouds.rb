#!/bin/ruby

n = gets.strip.to_i
c = gets.strip
c = c.split(' ').map(&:to_i)

jumps = 0
index = 0

while index < c.length - 1
    if ((index + 2 < c.length) && c[index + 2] != 1)
        index += 2
    else
        index += 1
    end
    jumps += 1
end

puts jumps