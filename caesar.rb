#!/bin/ruby

n = gets.strip.to_i
s = gets.strip
k = gets.strip.to_i

k = k % 26

result = []
arr = s.split("")

arr.each do |i|
i = i.ord
        
    if i> 64 and i < 91
        i = i + k
    if (i > 90)
        i -= 26; 
        end
    end
    if i > 96 and i < 123
        i = i + k
        if i > 122
        i -= 26;
        end
    end
    result.push(i.chr)

end

puts result.join("")