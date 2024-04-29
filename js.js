$(document).ready(function(){
// 置頂鍵
$(function(){
    $('.top-Anchor').click(function(){ 
      $('html,body').animate({scrollTop:0}, 333);
    });
    $(window).scroll(function() {
      if ( $(this).scrollTop() > 300 ){
        $(".top-Anchor").fadeIn(222);
      } else {
        $(".top-Anchor").stop().fadeOut(222);
      }
    }).scroll();
  });
//   bar
  $(".Internship_experience_more").click(function(){
    $(".Internship_experience_else").slideToggle("slow");
  });
  
  let the_event=document.querySelector(".the_event");
  $.ajax({
    url:"information/event.json",
    success:function(result){
      for(let i=0;i<result.length;i++){
      the_event.innerHTML+="<div class='event_block'><img loading='lazy' class='event_img' src='"+
      result[i]['img']+"'alt='"+
      result[i]['name']+"'><div class='event_content'><div class='event_source'>"+
      result[i]['source']+"</div><div class='event_name'>"+
      result[i]['name']+"</div></div></div>"
      }
    }
  });
  let Awards_block=document.querySelector(".Awards_block");
  $.ajax({
    url:"information/Awards.json",
    success:function(result){
      for(let i=0;i<result.length;i++){
      Awards_block.innerHTML+="<div class='content_block_1'><img class='Straight_img' loading='lazy' src='"+
      result[i]['img']+"'alt='"+
      result[i]['name']+"'><p class='text_center'>"+
      result[i]['name']+"</p></div>"
      }
    }
  });
  let University_Officer_Records=document.querySelector(".UOfficer_Records_block");
  $.ajax({
    url:"information/Records.json",
    success:function(result){
      for(let i=1;i<result.length;i++){
        University_Officer_Records.innerHTML+="<div class='content_block_1'><img class='Straight_img' loading='lazy' src='"+
      result[i]['img']+"'alt='"+
      result[i]['name']+"'><p class='text_center'>"+
      result[i]['name']+"</p></div>"
      }
    }
  });
  let activity_block=document.querySelector(".activity_block");
  $.ajax({
    url:"information/activity.json",
    success:function(result){
      for(let i=1;i<result.length;i++){
        activity_block.innerHTML+="<div class='content_block_1'><img class='Horizontal_img' loading='lazy' src='"+
      result[i]['img']+"'alt='"+
      result[i]['name']+"'><p class='text_center'>"+
      result[i]['name']+"</p></div>"
      }
    }
  });
  let  Certificate=document.querySelector(".Certificate_block");
  $.ajax({
    url:"information/Certificate.json",
    success:function(result){
      for(let i=1;i<result.length;i++){
        Certificate.innerHTML+="<div class='content_block_1'><img class='Straight_img' loading='lazy' src='"+
      result[i]['img']+"'alt='"+
      result[i]['name']+"'><p class='text_center'>"+
      result[i]['name']+"</p></div>"
      }
    }
  });
  // table
  let overview_tab= document.getElementsByClassName("overview_tab"); 
  let overview_content = document.getElementsByClassName("overview_content"); 
  overview_content[0].style.display = "block";
  $(".overview_tab").on("click",function(){
    let num = $(this).attr("value");
    overview_tabs(num);
  });
  function overview_tabs(num) { 
    let i;
    for (i = 0; i < overview_content.length; i++) {
      overview_content[i].style.display = "none";
      overview_tab[i].style.color="#A6A6A6"; 
    }
    overview_content[num].style.display = "block";
    overview_tab[num].style.color="#142624";
  }	

  let  the_overview_table_page_1=document.querySelector(".the_overview_table_page_1");
  $.ajax({
    url:"information/Certificate.json",
    success:function(result){
      var page_1 = "<table><tr><th>"+result[0]['name']+"</th><th>"+result[0]['wh']+"</th><th>"+result[0]['date']+"</th</tr>";
      for(let i=1;i<result.length;i++){
        page_1 +="<tr><td>"+
      result[i]['name']+"</td><td>"+
      result[i]['wh']+"</td><td>"+
      result[i]['date']+"</td><tr>"
      }
      page_1 +="</table>";
      the_overview_table_page_1.innerHTML+=page_1;
    }
  });
  let  the_overview_table_page_2=document.querySelector(".the_overview_table_page_2");
  $.ajax({
    url:"information/activity.json",
    success:function(result){
      var page_2 = "<table><tr><th>"+result[0]['name']+"</th><th>"+result[0]['wh']+"</th><th>"+result[0]['date']+"</th</tr>";
      for(let i=1;i<result.length;i++){
        page_2 +="<tr><td>"+
      result[i]['name_2']+"</td><td>"+
      result[i]['wh']+"</td><td>"+
      result[i]['date']+"</td><tr>"
      }
      page_2 +="</table>";
      the_overview_table_page_2.innerHTML+=page_2;
    }
  });
  let  the_overview_table_page_3=document.querySelector(".the_overview_table_page_3");
  $.ajax({
    url:"information/Records.json",
    success:function(result){
      var page_3 = "<table><tr><th>"+result[0]['name']+"</th><th>"+result[0]['wh']+"</th><th>"+result[0]['date']+"</th</tr>";
      for(let i=3;i<result.length;i++){
        page_3 +="<tr><td>"+
      result[i]['name']+"</td><td>"+
      result[i]['wh']+"</td><td>"+
      result[i]['date']+"</td><tr>"
      }
      page_3 +="</table>";
      the_overview_table_page_3.innerHTML+=page_3;
    }
  });
  let the_overview_table_page_4=document.querySelector(".the_overview_table_page_4");
  $.ajax({
    url:"information/else.json",
    success:function(result){
      var page_4 = "<table><tr><th>"+result[0]['name']+"</th><th>"+result[0]['wh']+"</th><th>"+result[0]['date']+"</th</tr>";
      for(let i=1;i<result.length;i++){
        page_4 +="<tr><td>"+
      result[i]['name']+"</td><td>"+
      result[i]['wh']+"</td><td>"+
      result[i]['date']+"</td><tr>"
      }
      page_4 +="</table>";
      the_overview_table_page_4.innerHTML+=page_4;
    }
  });
  let the_about_table_ajax_1=document.querySelector(".the_about_table_ajax_1");
  $.ajax({
    url:"information/skill.json",
    success:function(result){
      var ajax = "<table><tr><th>"+result[0]['name']+"</th><th>"+result[0]['wh']+"</th><th>"+result[0]['use']+"</th</tr>";
      for(let i=1;i<result.length;i++){
        if(result[i]['type']=='code'){
          ajax +="<tr><td>"+
          result[i]['name']+"</td><td>"+
          result[i]['wh']+"</td><td>"+
          result[i]['use']+"</td><tr>"
        }
      }
      ajax +="</table>";
      the_about_table_ajax_1.innerHTML+=ajax;
    }
  });
  let the_about_table_ajax_2=document.querySelector(".the_about_table_ajax_2");
  $.ajax({
    url:"information/skill.json",
    success:function(result){
      var ajax = "<table><tr><th>"+result[0]['name']+"</th><th>"+result[0]['wh']+"</th><th>"+result[0]['use']+"</th</tr>";
      for(let i=1;i<result.length;i++){
        if(result[i]['type']=='web'){
          ajax +="<tr><td>"+
          result[i]['name']+"</td><td>"+
          result[i]['wh']+"</td><td>"+
          result[i]['use']+"</td><tr>"
        }
      }
      ajax +="</table>";
      the_about_table_ajax_2.innerHTML+=ajax;
    }
  });
  let the_about_table_ajax_3=document.querySelector(".the_about_table_ajax_3");
  $.ajax({
    url:"information/skill.json",
    success:function(result){
      var ajax = "<table><tr><th>"+result[0]['name']+"</th><th>"+result[0]['wh']+"</th><th>"+result[0]['use']+"</th</tr>";
      for(let i=1;i<result.length;i++){
        if(result[i]['type']=='else'){
          ajax +="<tr><td>"+
          result[i]['name']+"</td><td>"+
          result[i]['wh']+"</td><td>"+
          result[i]['use']+"</td><tr>"
        }
      }
      ajax +="</table>";
      the_about_table_ajax_3.innerHTML+=ajax;
    }
  });
  // var offset = jQuery(':target').offset();
	// var scrollto = offset.top - 160; // minus fixed header height
	// jQuery('html, body').animate({scrollTop:scrollto}, 0);
$('a[href^="#"]').on('click', function(e) {
        e.preventDefault(); // 防止默認跳轉行為

        var targetId = $(this).attr('href'); // 獲取目標 ID
        var $targetElement = $(targetId); // 使用目標 ID 選擇器獲取目標元素

        if ($targetElement.length) { // 確保目標元素存在
            var offset = $targetElement.offset(); // 獲取目標元素的位置
            var scrollto = offset.top - 50; // 計算滾動位置，減去固定標頭的高度

            // 使用動畫效果平滑滾動到目標位置
            $('html, body').animate({
                scrollTop: scrollto
            }, 100);
        }
    });
    $(".UIUX_examples").click(function(){
      $(".UIUX_examples_open").slideToggle("slow");
    });
    $(".lasercutting_examples").click(function(){
      $(".lasercutting_examples_open").slideToggle("slow");
    });
});
