#!/bin/ruby

def timeConversion(s)
    hour = s[0...2]
    after = s[2...8]
    m = s[8...11]
    if m == "PM"
    case hour
    when "01"
        hour = "13" 
    when "02"
        hour = "14"
    when "03"
        hour = "15" 
    when "04"
        hour = "16"
    when "05"
        hour = "17"
    when "06"
        hour = "18"
    when "07"
        hour = "19"
    when "08"
        hour = "20"
    when "09"
        hour = "21"
    when "10"
        hour = "22"
    when "11"
        hour = "23"
    end
    end
    if m == "AM"
    case hour
    when "12"
        hour = "00"
    end
    end
    return hour + after
end

s = gets.strip
result = timeConversion(s)
puts result;