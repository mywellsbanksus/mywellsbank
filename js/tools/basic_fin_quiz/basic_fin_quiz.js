function initBasicFinQuiz(){var questionSet=$(".quiz fieldset"),currentQNo=0,noOfQuestions=0,radioSelected=false,oneRadiochecked=false,categoryList=[],newQSet=[],categorySelected;questionSet.each(function(index){if($(this).attr("data-category")){if(index!=0&&$(questionSet[index-1]).attr("data-category")!=$(this).attr("data-category")){categoryList.push($(this).attr("data-category"));}else{if(index==0){categoryList.push($(this).attr("data-category"));}}}else{}});function randomizer(list){var randNum=Math.floor((Math.random()*10)+1)%list.length,i=0,temp=list;if(temp.length>1){newQSet.push(temp[randNum]);temp.splice(randNum,1);randomizer(temp);}else{if(temp.length==1){newQSet.push(temp[0]);}}}if(categoryList.length>0){categorySelected=categoryList[Math.floor((Math.random()*10)+1)%categoryList.length];questionSet=$('.quiz fieldset[data-category="'+categorySelected+'"]');randomizer(questionSet);questionSet=$(newQSet);}noOfQuestions=questionSet.length;$(questionSet[0]).removeClass("hide");$(questionSet[0]).attr("aria-hidden","false");$(".quiz .insert").attr("aria-label","Question").attr("role","text");$(".quiz .answer").attr("role","region");$(".quiz .answer").children("h2").removeAttr("tabindex");$(".quiz .answer.correct").attr("aria-label","correct answer");$(".quiz .answer.incorrect").attr("aria-label","incorrect answer");if(noOfQuestions==1){$(".quiz a.qSkip").addClass("hide");}$(".qOptions .c7").click(function(e){var container=$(this).closest("div.qOptions");oneRadiochecked=false;switch(WF.Page.lang){case"es":container.siblings(".incorrect").children("h2").html("Incorrecto.");break;default:container.siblings(".incorrect").children("h2").html("Incorrect.");break;}container.find('input[type="radio"]').each(function(){if(($('input[type="radio"]:checked').val())===container.attr("data-answer")){radioSelected=true;container.addClass("hide");container.attr("aria-hidden","true");container.siblings(".correct").removeClass("hide");container.siblings(".correct").attr({"aria-hidden":false,"tabindex":-1}).focus();}});container.find('input[type="radio"]').each(function(){if($(this).prop("checked")){oneRadiochecked=true;return;}});if(radioSelected===false){container.addClass("hide");container.attr("aria-hidden","true");container.siblings(".incorrect").removeClass("hide");container.siblings(".incorrect").attr({"aria-hidden":false,"tabindex":-1}).focus();if(oneRadiochecked==false){switch(WF.Page.lang){case"es":container.siblings(".incorrect").children("h2").html("La respuesta correcta es");break;default:container.siblings(".incorrect").children("h2").html("Correct Answer is");break;}}}if(noOfQuestions>1){$(".quiz a.qSkip").removeClass("hide");}e.preventDefault();});$(".qSkip").click(function(e){var quiz=$(this).closest(".quiz");radioSelected=false;quiz.find("div.answer").each(function(){$(this).addClass("hide");$(this).attr("aria-hidden","true");});quiz.find("div.qOptions").each(function(){$(this).removeClass("hide");$(this).attr("aria-hidden","false");});questionSet.each(function(){$(this).addClass("hide");$(this).attr("aria-hidden","true");});if(currentQNo<noOfQuestions-1){currentQNo=currentQNo+1;}else{currentQNo=0;}$(questionSet.toArray()[currentQNo]).removeClass("hide");$(questionSet.toArray()[currentQNo]).attr("aria-hidden","false");$(questionSet.toArray()[currentQNo]).children("legend").focus();if(noOfQuestions>1){$("p.qNext>a.qSkip").addClass("hide");}e.preventDefault();});}$(document).ready(initBasicFinQuiz);