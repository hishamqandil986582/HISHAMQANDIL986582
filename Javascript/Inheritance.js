(function () {



function Person(name) {
this.name=name;
}

    Person.prototype.teach=function (subject) {
        return this.name+" is now teaching "+subject;
    };
    const statement=
    {
        s:"This house is not nice!",
        filter:function (arr) {

            let w=arr.split(" ");
            if (this.s.search(w)!==-1)
            {
                return this.s.substring(0,this.s.search(w))+this.s.substring(this.s.search(w)+arr.length,this.s.length);
            }
            else
                return  this.s;
       }
    };

    const arrobject=function(a)
        {
            var swapp;
            var n = a.length-1;
            var x=a;
            do {
                swapp = false;
                for (var i=0; i < n; i++)
                {
                    if (x[i] > x[i+1])
                    {
                        var temp = x[i];
                        x[i] = x[i+1];
                        x[i+1] = temp;
                        swapp = true;
                    }
                }
                n--;
            } while (swapp);
            return x;
        };

        const persons={

            name:"",
            age:"",
            greeting:function ()
            {
                console.log ("Greetings, my name is "+this.name+" and I am "+this.age+" years old.");
            },
            salute:function () {
                console.log ("Good morning!, and in case I dont see you good afternoon, good evening and good night!");
            }

        };
      const Student=Object.create(persons);
       Student.major="";
       Student.greeting=function()
       {
      console.log("“Hey, my name is  "+this.name+"  I am studying "+this.major );
       };

     //  const pro=new person();
       const Professor=Object.create(persons);
        Professor.department="";
         Professor.greeting=function()
        {
          console.log("Good day my name is   "+this.name+"   I am in the  "+this.department );
        };

    let mapEventHandlers=function()
    {
        console.log("-----------------Exercise 1:---------------");
        statement.s="hello this is not my first java program ";
         console.log(statement.filter('not'));
      // console.log("This house is not nice!".filter('not'));

      //  let x=[88,39,-98,82,3,5,67];
        //console.log(x.arrobject());

        console.log("-----------------Exercise 2:---------------");

        console.log(arrobject([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));


        console.log("-----------------Exercise 3:---------------");

        const Teacher=new Person();
        Teacher.name="Ting ";
        const Teacher1=Teacher.teach("WAP");

        console.log(Teacher1);


        console.log("-------------using object.creat-----------------------");

        const t2=Object.create(Person);
        t2.prototype.name="techer2";
       const t22=t2.prototype.teach("MWA");
        console.log(t22);



        console.log("-----------------Exercise 4:---------------");
        const s1=Object.create(Student);
        s1.name="Hisham Qandil";
        s1.major="CS";
        s1.greeting();
        s1.salute();


        const p1=Object.create(Professor);
        p1.name="Qandil Hisham";
        p1.department="Computer Since";
        p1.greeting();
        p1.salute();

    };
    window.onload=mapEventHandlers;

})();
