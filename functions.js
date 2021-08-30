function factorial(n = 4)
{
    if (n < 2)
        {
            return 1;
        }
        console.log(n);
    return n * factorial(n-1);
}
factorial();