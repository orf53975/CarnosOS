/*d6f50318b1d1bd6e93086ab7f5e36f04*/
function toggle_element(element_id){$('#'+element_id).toggle()}
function popup_scroll(url,width,height){var wnd=window.open(url,"popup","width="+width+",height="+height+",left=150,top=100,resizable=yes,scrollbars=yes");wnd.focus()}
function toggle_visibility(id){return toggle_element(id)}
function hover_toggle_css(el,to_css,from_css){$(el).toggleClass(to_css);if(from_css)$(el).toggleClass(from_css)};var Index={load_login:function(){$("#non_script_login").hide();$("#js_login_button").show();$("#login_form").attr("action",$("#login_form").attr("action")+"&show_server_selection=1")},login_submit:function(){if(Index.world_select_enter_pressed())return false;var url=$("#login_form").attr('action'),data={user:$("#login_form #user").val(),password:$("#login_form #password").val(),cookie:$("#login_form #cookie:checked").val(),clear:true};$.ajax({type:'POST',url:url,data:data,dataType:"json",success:function(response){$("#error").remove();if(response!=null)if(response.error!=null){$(".login-block h2").after("<div id='error' class='error' style='line-height: 20px'>"+response.error+"</div>");return}else{$("#servers-list-block").html(response.res);$("#world_selection").show()}}});return false},world_select_enter_pressed:function(){var dl=$('.world_button_active');if(dl.length==1&&$('#world_selection').is(":visible")){$('.world_button_active')[0].parentNode.onclick();return true};return false},submit_login:function(server){$('#server_select_list').attr("action",$('#server_select_list').attr("action")+"&"+server);$('#server_select_list').submit();return false},toggle_screenshot:function(num){$('#screenshot_image').append("<img src='graphic/index/screenshot-"+num+".jpg'>");$('#screenshot').fadeIn("slow")},hide_screenshot:function(){$('#screenshot').fadeOut("fast",function(){$('#screenshot_image').html('')})},countdown:function(container,remaining_seconds,desc){var starting_seconds=remaining_seconds;remaining_seconds-=1;var timer=$('<p class="timer"><span class="timer-item">00</span> <span class="timer-item">:</span> <span class="timer-item">00</span> <span class="timer-item">:</span> <span class="timer-item">00</span> <span class="timer-item">:</span> <span class="timer-item">00</span></p>').css('visibility','hidden'),days=timer.find('span').eq(0),hours=timer.find('span').eq(2),minutes=timer.find('span').eq(4),seconds=timer.find('span').eq(6),interval=setInterval(function(){var days_remaining=Math.floor((remaining_seconds/60/60/24)%60),hours_remaining=Math.floor((remaining_seconds/60/60)%24),minutes_remaining=Math.floor((remaining_seconds/60)%60),seconds_remaining=remaining_seconds%60;days.text(days_remaining);hours.text((hours_remaining<10?"0":"")+hours_remaining);minutes.text((minutes_remaining<10?"0":"")+minutes_remaining);seconds.text((seconds_remaining<10?"0":"")+seconds_remaining);if(starting_seconds-1==remaining_seconds)timer.css('visibility','visible');remaining_seconds-=1;if(remaining_seconds<0){timer.fadeOut();clearInterval(interval)}},1000);container.empty();container.append(timer);if(desc.length){var desc=$('<div />').attr('id','countdown_info').text(desc);timer.append(desc);timer.parent().css('margin-bottom','25px')}}}