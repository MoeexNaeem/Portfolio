Find the syntax errors in the following class definition. There are three errors.
Answer:
Line: Correction:
class YourAccount 
{ 
public: 
Account(); 
Account(float); 
float deposit(float); 
float withdraw(float); 
void printBalance(); 
private: 
float balance; 
} 

class foodInfo 
{ 
public: 
    void set(string, string, int);     
    void print() const;     
    string getName() const;     
    string getGroup() const;     
    int getCalories() const;     
    foodInfo(string name = "", string group = "", int calories = 0); 
private:     
    string name;     
    string group;     
    int calories; 
};


void foodInfo_______(string s1, string s2, int c) 
{     name = ______;     group = ______; 
 
    if (______)         calories = ______;     else 
        calories = ______; 
 
} 

void foodInfo__________ const 
{ 
    _______ << "Name: " << _______ << endl; 
    _______ << "Group: " << _______ << endl; 
    _______ << "Calories: " << _______ << endl; 
} 
