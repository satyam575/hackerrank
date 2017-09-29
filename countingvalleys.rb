def countValley(input)

level = 0
valleys = 0
belowSea = 0 

(0..input.length).each do |i|
    terrain = input[i]
    if terrain == "U"
        level += 1
    elsif terrain == "D"
        level -= 1
    end

    if belowSea == false and level < 0
        valleys -= 1
        belowwSea = true
    end
    
    if level >= 0
        belowSea = false
    end
end

puts valleys

end