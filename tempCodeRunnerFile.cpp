#include <bits/stdc++.h>
using namespace std;

int max_mum(vector<long long> vect_arr )
{
    	sort(vect_arr.begin(), vect_arr.end(), greater<long long> ());
	    long long max_r=0, sum =0;
	    long long m=vect_arr.size();
	    for(long long i=0; i<m; i++)
	    {
	        sum=sum+vect_arr[i-1];
	        long long x=(sum/i)*i;
	        max_r=max(max_r, x);
	    }
	    return max_r;
	    
}

int main() {
	// your code goes here
	
	int t;
	cin>>t;
	while(t--)
	{
	    long long n;
	    cin>>n;
	    vector<long long> arr(n);
	    map<int, int> mpp;
	    for(int i=0;i<n;i++)
	    {
	        cin>>arr[i];
	        mpp[arr[i]]++;
	    }
	    
	    vector<long long> vect_arr;
	    for(auto it:mpp)
	    {
	        vect_arr.push_back(it.second);
	    }
	    cout<<max_mum(vect_arr)<<endl;
	    
	}

}
