#!/bin/ruby

t = gets.strip.to_i
for a0 in (0..t-1)
    n = gets.strip.to_i
    #turn number in to string
    arr = n.to_s
    #remove all zeroes because if we try to divide by zero will get an error that will stop our code
    # then turn it into an array
    arr = arr.tr("0", "").split("")
    count = 0
    (0...arr.size).each do |i|            
        x = arr[i].to_i
        # turn numbers back into integers and if they are divisible by n that add by 1 to our counter
        if n & x == 0
            count += 1
        end
    end
    
    puts count
end