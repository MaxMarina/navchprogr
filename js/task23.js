function Task23(i) {
    var a1, a2, a3;
a1 = document.getElementById("pathBlocks4");  // шукаємо div за id
a2 = document.getElementById("pathBlocks5"); 
a3 = document.getElementById("pathBlocks6");    
if (i===1){
a1.innerHTML = "<div> Program Pr;<br> var i,n,y:integer; <br> begin<br> readln(n); <br> i:=1; y:=1; <br> while i &lt;&#61;n do <br> begin<br> &nbsp;&nbsp;&nbsp; y:=y*i;<br> &nbsp;&nbsp;&nbsp; i:=i+1;<br> end;<br> writeln('y=',y); <br> end.</div>";
a2.innerHTML = "<div> Program Pr;<br> var i,n,y:integer; <br> begin<br> readln(n); <br> i:=1; y:=1; <br> repeat  <br>      &nbsp;&nbsp;&nbsp; y:=y*i;<br> &nbsp;&nbsp;&nbsp; i:=i+1;<br> until i &gt;n;<br> writeln('y=',y); <br> end.</div>";   
 a3.innerHTML = "<div> Program Pr;<br> var i,n,y:integer; <br> begin<br> readln(n); <br>y:=1; <br>for i:=1 to n do  <br>     &nbsp;&nbsp;&nbsp; y:=y*i;<br>  writeln('y=',y); <br> end.</div>";   

}
    else if (i===2) {
     a1.innerHTML = "<div> #include &lt; iostream.h &gt; <br> #include &lt; conio.h &gt; <br> int main() <br> &#123; int i=1,n,y=1; <br> cin &gt;&gt;n;<br> while (i&lt;&#61;n)<br> &#123;y*=i;i++; &#125; ;<br> cout&lt;&lt;y&lt;&lt;endl;<br> getch(); <br> return 0; &#125; </div>";    
     a2.innerHTML = "<div> #include &lt; iostream.h &gt; <br> #include &lt; conio.h &gt; <br> int main() <br> &#123; int i=1,n,y=1; <br> cin &gt;&gt;n;<br>do <br> &#123;y*=i;i++; &#125; ;<br> while (i&gt;n); <br> cout&lt;&lt;y&lt;&lt;endl;<br> getch(); <br> return 0; &#125;</div>";  
     a3.innerHTML = "<div> #include &lt; iostream.h &gt; <br> #include &lt; conio.h &gt; <br> int main() <br> &#123; int i=1,n,y=1; <br> cin &gt;&gt;n;<br>for (i=1;&lt;&#61;n; i++) <br> &#123;y*=i; &#125; ;<br> cout&lt;&lt;y&lt;&lt;endl;<br> getch(); <br> return 0; &#125;</div>";   
    }
    else if (i===3){
    a1.innerHTML = "<div> n=int(input())<br>  i=y=1 <br> while  i&lt;&#61;n:<br> &nbsp;&nbsp;&nbsp;y*=i <br>&nbsp;&nbsp;&nbsp;i+=1 <br>  print('y=',y)</div>";  
    a2.innerHTML = "<div> n=int(input())<br> i=y=1 <br> while  True:<br> &nbsp;&nbsp;&nbsp;y*=i <br>&nbsp;&nbsp;&nbsp;i+=1 <br> &nbsp;&nbsp;&nbsp; if i&gt;n: break <br> print('y=',y) </div>";  
    a3.innerHTML = "<div>   n=int(input())<br> y=1 <br> for i in range(1,n+1):<br> &nbsp;&nbsp;&nbsp;y*=i <br> print('y=',y) </div>";      
    }
}