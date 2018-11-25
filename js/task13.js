function Task13(i) {
    var a1, a2, a3;
a1 = document.getElementById("pathBlocks1");  // шукаємо div за id
a2 = document.getElementById("pathBlocks2"); 
a3 = document.getElementById("pathBlocks3");    
if (i===1){
a1.innerHTML = "<div> Program Pr;<br> var x,y,z:integer; <br> begin<br> readln(x,y,z); <br> if  (x>=y) and (y>=z) then;<br> writeln('yes'); <br> else writeln('no'); <br> end. </div>";
a2.innerHTML = "<div> Program Pr;<br>var n:integer; <br> begin<br> readln(n); <br> Case n of <br>  1:writeln('January'); <br> 2:writeln('February'); <br>  ... <br> else writeln('December' ); <br> end. </div>";   
 a3.innerHTML = "<div> Program Pr;<br> var n,a,b,c,kp,kn:integer; <br> begin<br>readln(n);kp:=0; kn:=0; <br> a:=n div 100; <br>  b:=(n mod 100)div 10; <br>c:=n mod 10; <br> if a mod 2 =0 then kp:=kp+1  <br>else kn:=kn+1; <br> if b mod 2 =0 then kp:=kp+1  <br> else kn:=kn+1; <br> if c mod 2 =0 then kp:=kp+1  <br> else kn:=kn+1; <br> if kp>kn then  writeln('parni' ) <br> else  writeln('neparni' );<br> </div>";   

}
    else if (i===2) {
     a1.innerHTML = "<div> #include &lt; iostream.h &gt; <br> #include &lt; conio.h &gt; <br> int main() <br> &#123; int x,y,z; <br> cin &gt;&gt;x&gt;&gt;y&gt;&gt;z;  <br> if (x>=y &amp;&amp; y>=z ) <br> cout&lt;&lt; & 'yes;&lt;&lt;endl;<br> else cout&lt;&lt;'no'&lt;&lt;endl;<br>  getch(); <br> return 0; &#125; </div>";    
     a2.innerHTML = "<div> #include &lt; iostream.h &gt; <br> #include &lt; conio.h &gt; <br> int main() <br> &#123; int n; <br> cin &gt;&gt;n;  <br> if (n==1) <br>  cout&lt;&lt;'January'&lt;&lt;endl;<br> else if (n==2) <br>  cout&lt;&lt;'February'&lt;&lt;endl;... <br> else  cout&lt;&lt;'December'&lt;&lt;endl;<br>  getch(); <br> return 0; &#125;</div>";  
     a3.innerHTML = "<div> #include &lt; iostream.h &gt; <br> #include &lt; conio.h &gt; <br> int main() <br> &#123; int n,a,b,c,kp=0,kn=0; <br> cin &gt;&gt;n;  <br>  a=n/100;<br> b=(n%100)/10;  <br> c=n%10; <br> if (a%2==0)kp++; else kn++<br> if (b%2==0)kp++; else kn++<br> if (c%2==0)kp++; else kn++<br> if (kp>kn) <br> cout&lt;&lt;'parni'&lt;&lt;endl;<br> else  cout&lt;&lt;'neparni'&lt;&lt;endl;<br>  getch(); <br> return 0; &#125;</div>";   
    }
    else if (i===3){
    a1.innerHTML = "<div> x,y,z=map(int, input().split())<br> if  x>=y and y>=z: <br> &nbsp;&nbsp;&nbsp; print('yes')<br> else: <br> &nbsp;&nbsp;&nbsp;print('no') <br> </div>";  
    a2.innerHTML = "<div> n=int(input())<br> if  n==1: <br> &nbsp;&nbsp;&nbsp; print('January')<br> elif n==2: <br> &nbsp;&nbsp;&nbsp;print('February') <br> ... <br> else:<br>&nbsp;&nbsp;&nbsp;print('December') </div>";  
    a3.innerHTML = "<div>  n=int(input())<br> a=n/100;<br> b=(n%100)/10;  <br> c=n%10; <br> if a%2==0: <br> &nbsp;&nbsp;&nbsp; kp+=1; else:<br> &nbsp;&nbsp;&nbsp; kn+=1<br> if b%2==0: <br> &nbsp;&nbsp;&nbsp; kp+=1;<br> else:<br> &nbsp;&nbsp;&nbsp; kn+=1<br> if c%2==0: <br> &nbsp;&nbsp;&nbsp; kp+=1;<br> else:<br> &nbsp;&nbsp;&nbsp; kn+=1<br> if kp>kn: <br>     &nbsp;&nbsp;&nbsp;print('parni') <br> else:<br>&nbsp;&nbsp;&nbsp;print('neparni') </div>";      
    }
}