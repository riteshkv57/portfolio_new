#include <bits/stdc++.h>
using namespace std;
int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int x;
        cin >> x;
        int ans = 1;
        while (ans * 2 <= x)
        {
            ans *= 2;
        }
        cout << ans << endl;
    }
    return 0;
}
