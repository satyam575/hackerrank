#!/bin/ruby

def solve(grades)
    (0...grades.size).each do |i|
        grades[i] = grades[i].to_f
        round_up = (grades[i]/5).ceil * 5
        if grades[i] <= 37   
            grades[i] = grades[i]
        elsif round_up - grades[i] < 3
            grades[i] = round_up
        else
            grades[i] = grades[i]
        end
        puts grades[i].to_i
    end
end

n = gets.strip.to_i
grades = Array.new(n)
for grades_i in (0..n-1)
    grades[grades_i] = gets.strip.to_i
end
result = solve(grades)
print result.join("\n")
