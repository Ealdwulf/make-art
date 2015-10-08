canvas = top.document.getElementsByTagName('canvas')[0]
yt = top.document.getElementsByTagName('iframe')[0].thing
ctx = canvas.getContext('2d')
url="www.youtube.com/v/E2VCwBzGdPM"
if yt.my_url!=url
  yt.loadVideoByUrl(url)
  yt.my_url = url
  
t = ->
    yt.getCurrentTime()
now = t()

between = (a,b)  -> t()>a and t()<b

tree = (a,b,x,y,s) ->   
      if between(a,b)
          moveTo x+t()*s,y
          color brown
          rectangle 10,60

      if between(a+0.5,b)
          moveTo x+t()*s,y
          color green
          circle 25
rose = (a,b,x,y,s) ->   
      if between(a,b)
          moveTo x+t()*s,y
          color green
          rectangle 10,60

      if between(a+0.5,b)
          moveTo x+t()*s,y
          color red
          circle 25

cloud = (a,b,x,y,s) -> 
    if between(a,b)
        color white
        moveTo x+(t()-a)*s,y
        circle 15
    
    
r = ->
      ctx.clearRect(0,0,1000,1000)
      color black
      moveTo 70,20
      tree 6,40,300,100,-15
      tree 7,40,350,100,-15
      tree 8,40,400,100,-15
      rose 10,40,325,200,-15
      rose 11,40,375,200,-15
      rose 12,40,425,200,-15
      
      if between(35,70)
          moveTo 0,0
          color blue
          rectangle 500,250
          
       cloud 40.00,70, 300, 50, -15
       cloud 40.25,70, 320, 40, -15
       cloud 40.50,70, 340, 50, -15

       
      
      moveTo 70,20
      text t()

          

r()
yt.render = r

