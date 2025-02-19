ranc@LAPTOP-OBI8ID1G MINGW64 ~/Desktop/Vokativa/Vokativa_Match (main)
$ git checkout -b "proyect3"
Switched to a new branch 'proyect3'

franc@LAPTOP-OBI8ID1G MINGW64 ~/Desktop/Vokativa/Vokativa_Match (proyect3)
$ git status
On branch proyect3
nothing to commit, working tree clean

franc@LAPTOP-OBI8ID1G MINGW64 ~/Desktop/Vokativa/Vokativa_Match (proyect3)
$ git add .

franc@LAPTOP-OBI8ID1G MINGW64 ~/Desktop/Vokativa/Vokativa_Match (proyect3)
$ git commit -m"avance1"
On branch proyect3
nothing to commit, working tree clean

franc@LAPTOP-OBI8ID1G MINGW64 ~/Desktop/Vokativa/Vokativa_Match (proyect3)
$ git push origin proyect3
remote: Permission to Vokativa/Vokativa_Match.git denied to Frank-Weye.
fatal: unable to access 'https://github.com/Vokativa/Vokativa_Match/': The requested URL returned error: 403

franc@LAPTOP-OBI8ID1G MINGW64 ~/Desktop/Vokativa/Vokativa_Match (proyect3)
$ git remote -v
origin  https://github.com/Vokativa/Vokativa_Match (fetch)
origin  https://github.com/Vokativa/Vokativa_Match (push)

franc@LAPTOP-OBI8ID1G MINGW64 ~/Desktop/Vokativa/Vokativa_Match (proyect3)
$ git remote remove origin 

franc@LAPTOP-OBI8ID1G MINGW64 ~/Desktop/Vokativa/Vokativa_Match (proyect3)
$ git remote add origin https://github.com/Frank-Weye/Vokativa_Match.git

franc@LAPTOP-OBI8ID1G MINGW64 ~/Desktop/Vokativa/Vokativa_Match (proyect3)
$ git remote -v
origin  https://github.com/Frank-Weye/Vokativa_Match.git (fetch)
origin  https://github.com/Frank-Weye/Vokativa_Match.git (push)

franc@LAPTOP-OBI8ID1G MINGW64 ~/Desktop/Vokativa/Vokativa_Match (proyect3)
$ git status
On branch proyect3
nothing to commit, working tree clean

franc@LAPTOP-OBI8ID1G MINGW64 ~/Desktop/Vokativa/Vokativa_Match (proyect3)
$ git add .

franc@LAPTOP-OBI8ID1G MINGW64 ~/Desktop/Vokativa/Vokativa_Match (proyect3)
$ git commit -m"avance1"
On branch proyect3
nothing to commit, working tree clean

franc@LAPTOP-OBI8ID1G MINGW64 ~/Desktop/Vokativa/Vokativa_Match (proyect3)
$ git push origin proyect3
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 8 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (5/5), 806 bytes | 268.00 KiB/s, done.
Total 5 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
remote: 
remote: Create a pull request for 'proyect3' on GitHub by visiting:
remote:      https://github.com/Frank-Weye/Vokativa_Match/pull/new/proyect3
remote:
To https://github.com/Frank-Weye/Vokativa_Match.git
 * [new branch]      proyect3 -> proyect3