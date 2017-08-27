#!/bin/ruby

def getRecord(s)
    
    low = s[0]
    high = s[0]
    break_low = 0
    break_high = 0
    
    for i in s do
    if i > high
        high = i
        break_high = break_high + 1
    
    elsif i < low
        low = i
        break_low = break_low + 1
        
    end
    end  
    
    puts"#{break_high} #{break_low}"
    
end

n = gets.strip.to_i
s = gets.strip
s = s.split(' ').map(&:to_i)
result = getRecord(s)
print result.join(" ")
