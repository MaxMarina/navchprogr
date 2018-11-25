function Task(i) {
    var a;
a = document.getElementById("pathBlocks");  // шукаємо div за id
if (i===1){
a.innerHTML = "<div> Program Pr;<br>var a,b,s:integer; <br> begin<br> readln(a,b); <br> s:=a+b;<br> writeln('s=',s); <br> end. </div>";}
    else if (i===2) {
    a.innerHTML = "<div> #include &lt; iostream.h &gt; <br> #include &lt; conio.h &gt; <br> int main() <br> &#123; int a,b; <br> cin &gt;&gt;a&gt;&gt;b;<br> int s=a+b; <br>  cout&lt;&lt;s&lt;&lt;endl;<br> getch(); <br> return 0; &#125; </div>";    
    }
    else if (i===3){
    a.innerHTML = "<div> a,b=map(int, input().split())<br> s=a+b <br> print('s=',s)<br> або <br> print(sum(map(int, input().split())))  </div>";        
    }
}