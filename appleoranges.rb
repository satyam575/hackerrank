#!/bin/ruby

s,t = gets.strip.split(' ')
s = s.to_i
t = t.to_i
a,b = gets.strip.split(' ')
a = a.to_i
b = b.to_i
m,n = gets.strip.split(' ')
m = m.to_i
n = n.to_i
apple = gets.strip
apple = apple.split(' ').map(&:to_i)
orange = gets.strip
orange = orange.split(' ').map(&:to_i)

appleCount = 0
orangeCount = 0

(0...apple.size).each do |i|
    posA = apple[i] + a
    if posA >= s and posA <= t
        appleCount += 1
    end
end

(0...orange.size).each do |i|
    posO = orange[i] + b
    if posO >= s and posO <= t
        orangeCount += 1
    end
end

puts appleCount
puts orangeCount