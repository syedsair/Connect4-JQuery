$(document).ready(function() {
    $("span").click(function(event) {
        var col = event.target.id;
		var filled = false
		col = parseInt(col, 10)
		var color = "black"
		if (col >= 11 && col <= 17)
		{
			if ($("#playerMessage").text() == "Player-1's Turn! Select a Column to Put in your Chip!")
			{
				color = "rgb(255, 0, 0)"
			}
			else{
				color = "rgb(0, 0, 255)"
			}
			col += 50
			while (col>10)
			{
				if($('#'+col).css("background-color")=='rgb(128, 128, 128)'){
					$('#'+col).css("background-color", color);
					filled = true;
					break;
				}
				col -= 10;
			}
			if (filled == false)
			{
				alert("This Column is already filled \nKindly Choose Some other Column!")
			}
			else{
				var player = 0;
				if ($("#playerMessage").text() == "Player-1's Turn! Select a Column to Put in your Chip!")
				{
					player = 1;
					$("#playerMessage").replaceWith("<h2 id = 'playerMessage'>Player-2's Turn! Select a Column to Put in your Chip!</h2>")
				}
				else{
					player = 2;
					$("#playerMessage").replaceWith("<h2 id = 'playerMessage'>Player-1's Turn! Select a Column to Put in your Chip!</h2>")
				}
				var win = $.fn.checkWin(col);
				if (win==true)
				{
					alert("Player " + player + " Won!")
					location.reload();
				}
			}
		}
		
    });
	
	$.fn.checkWin = function(current) {
		var our_color = $('#'+current).css("background-color")
		current = parseInt(current, 10)
		var row = parseInt(current/10);
		var col = parseInt(current%10);
		var new_color = ""
		var win = 0;
		for (var i = 0; i<=7; i++)
		{
			new_color = $('#'+row.toString()+i).css("background-color")
			if (new_color == our_color)
			{
				win++;
				if (win==4)
					return true;
			}
			else
				win = 0;
		}
		if (win!=4)
			return false;
	}
});