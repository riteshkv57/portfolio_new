#include<bits/stdc++.h>

using namespace std;

#define int long long

signed main()
{
    int ttt;
    cin>>ttt;
    while(ttt--)
    {
        int n;
        cin>>n;
        int arr[n];
        for(int i=0;i<n;i++)
        {
            cin>>arr[i];
        }
        vector<int> val(n+1,0);
        for(int i=0;i<n;i++)
        {
            val[arr[i]]++;
        }
        int ans=0;
        bool flag=true;
        for(int i=0;i<=n;i++)
        {
            if(val[i]==0)
            {
                ans=i;
                break;
            }
            else if(val[i]==1)
            {
                if(flag)
                {
                    flag=false;
                    
                }
                else
                {
                    ans=i;
                    break;
                }
            }
        }
        cout<<ans<<endl;
    }
}