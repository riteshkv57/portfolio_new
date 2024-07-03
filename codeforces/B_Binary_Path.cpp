#include<bits/stdc++.h>
using namespace std;
int main(){
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        string arr[2][n];
        for(int i=0;i<=1;i++){
            string s;
            cin>>s;
            for(int j=0;j<n;j++){
                string x="";
                x+=s[j];
                arr[i][j]=x;
            }
        }
        int j=0,i=0;
        int x=1,ways=1;
        string ans=arr[0][0];
        while(i<2 && j<n-1){
            if(i==0){
                if(arr[i][j+1]=="0" && arr[i+1][j]=="1"){
                    ans+=arr[i][j+1];
                    j++;
                    x=1;
                }
                else if(arr[i][j+1]==arr[i+1][j]){
                    ans+=arr[i][j+1];
                    j++;
                    x++;
                }
                else{
                    ans+=arr[i+1][j];
                    i++;
                    ways=x;
                    x=1;
                }
            }
            else{
                ans+=arr[i][j+1];
                j++;
            }
        }
        if(i==0){
            ans+=arr[1][n-1];
            ways=x;
        }
        cout<<ans<<endl;
        cout<<ways<<endl;
    }
}
