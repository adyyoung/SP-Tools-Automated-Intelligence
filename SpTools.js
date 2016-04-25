var bootstrap = (function(){
	var hostUrl = "https://adyyoung.github.io/SP-Tools-Automated-Intelligence/";
	var logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAlCAYAAAAHgqbCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAACCrSURBVHhe5Z0HlFZFssd95519b/PbNSIKEiSIoAw5Z0VJKjmpgIiiEiRJkowEJeegZEGQjOQMKyK6iuSsKILADAwZBOrVr77b8925fDPzAQrrbp1TZ2bu7du3urr+3VXd1XfuiH33DvlX4vh+d8j2Lr+Tv2TMLRlyPB41p8/+mKR7NIc8kPkRuTfDw5IqYyZJkzWbXQ+Weyhbdkn1cGYrB6fOlCViOep7MEuoPvh+LfeQXqNedy1a9svjmL+5ftdD6eXvaR4y5vf7AmX9MqV9JLvc78nuL+eXPcjcfyBzVrnPk4X2ooNIz3GNNlM3ZdM88miicvzO865d0TIyP5QtpDvaHKmMn9E1+rf3+WSPVI46XVnH/jbdDP/bAAQFZYnJLS80ekXGT54i7w0aLGWfrWyd7S+XVju8QMnS0nfAQBn9wTgZO2GCtHm7k3Wav5yr70Wt74NJk2Xs+AnSoUs3yZorr5SrUlXGT5kiI8e+HxWP0vcMHDZcnqtdxwCMkd+bPqMULPOE9O7fX9Z9ukH27NtvzO99+g+QQmWetDJ+Q0b2Yk89LV3f6WXyDBs9RttYxYwvKaPg+r3pH1a9NJYRY8bK+xMmSuuOHSVXsWJWd7AsA0fthg1l8PARMvHDqVKs7NMGLlc/wGnftZu9P1JbI/GYceOlj+o7W968Ur5qDRmkdY/64IOIZWErrzrIliefAaN523ahe+8nfgYZ3mjdRgqVLpMAFnSErEnp43r53wIgKONBHUWKPFFWtu/cIY7mL1wif3swbSJlYaAVa9SUEyfjvVIin236Qv7vgTSJ6sR4chQoJKO1Exx9vXWr5CxcRFq26+BdiZ7iTpyQN1q1ljvTppPcRYvJtI9neneSpvFTPpRH8xWwttGG1JmySp2XGsr+A996JUS2bNsuFavVSHIWxOB55vsfDnlPaHs/3yRlKlayev3l02qbM+fMpXVu9UqKzJgzW/IUK26GR5m/pn7Q3nm9tGDRYskck0va6mB05epV72rSNFaBnDVXHnvfynXrvavJ07QZMyRnwSI2KKbTtgf1cSP8bwEQN72+0bKVp6oQ7T2wX/KVLGlTsCsLQMpVrSY//HjYKyWySjsgEkCy5y8oQ0aN9kqJbNi0SR4rWEiatmrjXYme1m/4VIo8WVaKPV1ONiogg3RVjQYO0qZ//lOeqPSsPJAlq4GgRr16snV7eBCAJk6bKo/mzZ8wero24B5lzZ1Xlixf4ZUM0ao166RU+QqJAMJzzDTtu3aR47GxXkmR2Lg4qaQDCm4OZdBTJPlTopYdOuoIn1Vate8g8adPe1eVksBK+SrVrA9438Jly1GQdyd5On/+gtSq30Db/suA5N8CIAAgb/ESsnzVak9NITp79pxN5/j1TlE3C5A8xUpIcTXyXv36Sxd1deB2XbrK3E8WeqVEDv/0k43+Hbp2t/s9+74r1eq+KHmKlpBPli7xSoVo55498nb3HvLEs8/ZzPbe4CHy3cHvvbshmj1vvjxeqJC5EZEAcvnyZXm7R09JpzITIyE/gwblB48YJRd//tkrGaJIAKE8AFup94LUoVt3yfhYTitz/8NZpHHzN6V7n77WNmQfOHykHD9+3CstsnnrNnNhO6lMlMFdYia8S2fPNh3fTgQQXE/qcLrs2qu36q2bZIqJsT7AA/AD5Ji+p7vqs6PqFpdry7YdCorzds9P+UuVvmbAuBH+zQMEBTygU+pztep6qklMO3btlvTasSib8jcLkALq7+Lz36PxgeM/3ptK3lQ/2dG2Hdulcp265h64MnR05569vBIhWrhkqcSoy0Zwjp/PDPHnVA9oW2prHWEQnFMDaKUjMHXUePFagEB79++X2jpyUg8jJzLWb9xYwfadVyJMkQBCeXPfvgu7b4727t0nZZ+rbHpG34DE3648Ojjt3rfPKy3ysbplj+jMhTvpyqFP4okgQHKr+0YdrhxMOcCIXEGA7N6z1+S+K21649/ffa/kUpd174EDdt/RV99ssXc678K183r5Nw8QRomchQrLlOkzTDE/62jJCH5CfX4o7kScjoDd5J50Ga38LwGQNFlD/rhjRuq2nbt4pXRW2LXLjA2D5z6+/eOFishU9ZEdHT58RF7VkZjZzV8XnUl9nXu+IxfUXXDEwkO6bDmk2vMvRAQItGz1KgvieT5G37d8TeIZ1VEQIPZONcypM2YmeDzo0D8yN9H4idnJGa5jZm/euc9noHMWLNA4Kxy3OI4EkAI60iMvcYNj6nRGHQTIvv0HJIvGJm7AgwF3Bp3hTvldNyXAh+7/YwFCw+nkJ595TgFx0pRy7NhxdStGyryFi+xvaNXadaZEOvd2AIRRnRWsrzZ/45UQc7XyFtf4KGBEMM9Vqfu8bN6yxSstslrbUKRsWZuZ/ADBtTl15oz3V8hleUjrRG4GC+jAt98liiuCAGFmeFJdvO07d3olxGastev/4f0lsmL1GltZ88868M0ChHiBxZUS5cobl1S5ij75lJWnf6MBCPy3B9LKIO13PzVq2uym3azfNEBQEsrqof6woz061RMjtNe4wNERHQ0bNWlqS7m3AyAsP7L8/O13YXdn6syZkiknfnbiERmm/nwlS8vCpUu90gTrX5mbg/vlB8iU6dM1/vnE+0vkp6PHZILGP34XrUuvXrIII/PIDxCM5+50GWxZ/LQHNALzUuUqWFwTH3/KrkEvvvJqwjNhWW8OIJGId8YUKWbPRwsQBsBaDV6yMo4GjxxldeBy+steD/9mAeJmj6Jln1b/O9Q5rALNmj9f7vj9n7TTymmQftauX7lyRabPniN3qzvDasytBghLrbhT/lF89Ljx5tZEGt3oVAzEH/hv+vKfNsoHATJm/HipXLuurF4XHu399I0GzAVLPyEf+tw7P0BwQYgXNn3xpXdXLPglKM9bvJR8rb68I+pgidpv+DcLkIsXLylflIuX9KcytEvjDFzS6wEIs/RTz1UxG3A0fMzY/1yAuOCrUdPmnjpETsbHy7AxY6S8AqBRs2ayUQ3a0Z59+20qJwjk/qFoAJKvwC8CEH7WfblRIiNi1Cd2ChoRjNFh1It9y7MbPt8kpStWMlfND5BJ06aZHuq98poG5Ae9qyE6owPEGy1ayZ/vS60DxzzvamKAEJu17dzZXFNHQ7XNVeq+IBWq17A9IkcA/JkatSxOcMC+WYAQ97CROmb8ROMPJk2xTcVHcuezPo4WIPRry/aJ96dYUkaGSINQtPybBQgdk7toCR05o9tEunDhvIzSUZuVpacqV1G/PGxMK9eslT+nSp2o/tAMUkCGjh7jlRL57ItNtvt9vQB5MEs2KVPpGYuFHH3+5ZdSrko1c7/8dVl92tn1Xm1ssYOjuQs+0VG1sMUmQYA8VrCwzVL9hwyTSz+HRmFo7MSJCsIitjI2e8F872oYIIy66HH+osXenZSpd7/+kiV32EBvFiAxRYrKX+5/IGFVCqb9bjEgGoDwHgDi1y/0tPbzf2SQToNRSuU6z3uqiI7+uXmzuRMEgewmO2J0pk7cLxQP49PmLVFSOzvs36/f8JkZHKkifnlSAgirP5lj8pjr4ujSpZ9lwNBh1g4MNfzeLLaDPOHDqV7JEPUdOMg28qq/+OI1AEEm5C1cpqx8PHeu7RWsWrveUm0Azt8ffCgiQFhBq9vwFTkQYWk3KWI5uay6eoAend0sQArqjHxfhkw2m/kZXVB/ECB71RPA/UO3LC6Q+kLdb7Zrb/cdoQPXn34Zrpd/kwCh0bg/YyaM99Qhcu7cOQtqGQ0XLF6ivFh/X2S+u6MTJ09a8J7p8Vwy+aPp3lWC0hPSb/AQyaV+f7a8+Sz2yF+ilHTq8U7CcjE0fdZs6+TgiJQSQGA6st4rjeXQ4SNeKR0N1ag6dutugOWdtImYihyr+FPh4JiAu0qduravENwodABBJ4CB2OvlJk2lpAbZyAlHAkjJcuVt/2XS1GkJfjvLpGv/8amtAIZ0uMRcQVbfLlwILzm3bN9RjTTk5t4sQAisaT+rV45xJdlb4Zm/qevrBwibqACfHDFm4Oov1DOXLEivv9nipmcP+DcHEBpMp7C06zciXC2U+dfUaWzUgXEtylWumrDcCa1TA0ifPYcFzX4ioKdjR7z/vgJvgoENQDk6eOiQxTvBpEY4GoBgwMxe7w0ebDvfji5ogLpGZR8zAR98vPzjs40qb/g+K0vtu3QzmQFAcgDhPejGZbg644gEkCJPPGlGtmXbNu+qyKJlyyzXDHfT6fAP96ayVBd//hcJlYXU1XR7FjcDENJWVq9bZ0vKjj//4kvp2ru3zbq4xH6AMBDy/lVr18o3Kru/jyDuT5r6kc1Kzk27Gb4pgBzvq9zrDjnWI8THe4auRSrrZ3vOeybhuT6heykBhEZjaO8OHOypRINRNSIycvFD/WXpIGaFGbNneyUJNOOk4RtNLKdqxuw5iYwxKTpy9KilQbh0C/87YABChqujvfv3WVDuBwiMK1WgVBkN/EfZ0nNK9L2Cskuv3jazYIgkK7JvsGv3Hq9EaGUpZ+GiCQCJxABkns6mjhgkcG2GjBxlK3yOSJmhvL+N/I7cflcTerV5C7sHSFhWP/jDD94d0ZlnkeRJAiBtO3WW877ZKCkivYZAHYAsXbnKu5o0kW3AwNGtVx9Jq7pCHzc7e8A3DBAzcjXqk5Pyy9nVreXMiuZyZkkjOf5O6F6kZ2C71+9/5OyqlnJm5ZtyVvnM0lcktv/vrb6UAMK0SU7Tx3PmqD+6T3bt2aMKXKmjaNFrOgQF0Ym1dRonuNuhIzvLnu+qP497QV4VQFuzfr18e/CgnD59Rk7Gn7KZCR92+66dOpMsk9d0us6QIxT3+Ot3jP//arM35eD331sqxCdLlsiztWqbjxwsyz7Mwzlj5PUWLbXcUn3HLn1XrL3T3hsbK1u0oz+aNUteaPSq7RADDp7FGCtWryHz1QXavXev7P/2W3l30CDLOk4OIOxzDB09WmeBAxZDjJs8RUqoUZP6zr4RgFujI3dZnZXx24PPM2u+qO4h7tfO3bvNzWGEz6FuITKx4rZ0xUprOzMJLqJ/VnPMzMZ+1Ofq9u7ctdtcx0hMu/oNGWLBOG4lGdXbVCdsZPrLIQsbmNNVV91695EK1arbYPVLgQO+cYCoMQOGn3/62sNwiOKGp5LjvSM/A3MvbsidXukQMXvGjUpn96KZQQhin6tVRwPWepabxL4GRhqpPMp6JE9eW/2p/sKLNgKXr1o9wT3AiAuWKi0NXntd2nXuqjNRZ3mrUxdp3qatVNPyuYsUNwPzj6pBBrT5ipfUul8yeSpUq2EzlEscDDIyMbtg2LSh+Vvt9J28t7P9zm55ppy5bMT1v5ffqZdlat5Ts14DNfTy8vDjMckaBO0sXaGSlq+vz9VXl+kZM2DcT/6GS5avqC5N7ojt5BqxGWn1yEs97Mm41ST6o1L1mgn3SlWoaPIHZaIs2QO0j76o9nxktnZpjMSMTcDOCmBS5fKXLG19ycoXM90vBQzHNwQQmwXUmE+Me9Qz8TCd/2qEHOt67TOOAVbcwD/LlVMH5efj2y1AvHohXk6OzRIVQGA6DKUwsrF/wWxAEOwfsSmDwjCye9TAGYkozwiJ0l05FMrfbCLie8NM64CCOtknoI6UmOeRBaazmG2YLSKVhRnpWEWiPLJxDRcRdwjfn/cjf9BgXdtpB+/hvfwkPklqhoMBJHqy9+lPRnP0RT0wIKJu6mCwQRbkc+yedbq28qo7yiO7u+/ag0z+9qJ7dxqT+64sz/E+J4dfHvoGHVCeVJI706TTslkSl9P3O7nRAXrzyw2bvHrfgQegEqP45UuKbxggzB4Xtk3yYBGmq5fOSOx7/50QU1zzLNcH/EF+PrRBrpyPCz1z/qQCJHPUAIFpJL53p57v2MjbusPbUqXO89bpKIxZgxGd2KCtzgyvNGvunZlIPO2jNEY7RuWO3XpYsP16i1aWRJerSFFp0rqNXWNmiYY7du9poxsysNlGynukco5ZKXu2prpj2tlZc+exUbG9PgMzsjM6U5dfZhgDYiYgi5jYoVmbtyxwjgQSruEGNX6zpemig7aTET9TTHiU5x0YF8F1/cavWTo/O9EsTY8YGzoV2av/AHlNXUPKAA72g4o/VU6a6ruT01FbnZHbdOwkj+bLr/FUfmnaOlTe9QszBf0ZlBud1H7pJauDNuLqMlv69YH8yJ2jQEF5Xds3YNjwBJnhMeqetWrf0WYu3gGTQU2/YDdBWf1Mmv/1A8SLPWIH/00t2+z7GjqzvIkc6x54zmObQQb91SsZohsBCKPok89UtudZnsSPpxPvfiiDGQTnQ6bPnGXpC8QWhw4f1g7ubyOuMwqYUS2bAgeDIGDlDAn+LnELR2t3791nO9LEJikxcpA02eu9/tbprEqxghapLIxcxDq4dnQyCwoE3ZdUZvZJWKGKSSIAZ1R8q1MnOylI1i2+P/lewYUBmGt1Gzay5Mez587J5ctXpP+QobYRSt3MoOmy57ATj4uWLpdvvzuYsPQbJFaNAKO5gCoDZ0OI75LTEUvExC8xRYpYNsOeffutPPpid55YC6MPDgTMHMSaJ+PjrY1fq/wMfE4f/GRjsWW7jvLJ4iVy+Eh4Cd1PnObc+MUXBjhmHfZx0HH8qdPXyOoYPRErXTdAbPZQQz67pq33+mvp8on9Sa5o8WzcIAWXj24EIDT26eeqejXoO69cVoP6yJQKQPKVKCkLVWl+IpGPYJpp3dWDkgEII4+jH3740YztGQ20zyhgrofoDAJwliinTP/Iu5o0ESCTPoKx5dKRee7CcP7VzHnzEpL2/G2HcdE4kHT6TCjfLDb2hDR4/Y2IsRjuVP1XX0uULDl87Fjbe8FgHtNYaMCwYZakGA2xackKE24UYGEfKSXq3uddG5iKa8x0VAczPxFsl9IYiSxk/+CFq7mYJV6PyCx4JE8+6zPAxCDJ2XT/8WlHp9T4g5QqU2bTBTvs0RD7K9cPEJ0B4Cvnwrk7V6/oiPd94m3+0/NqGEiued4A8n9eqRDdKEBITnPETMHuswMIu+ALfCnvjrZu364KqmoGST0OIP10RHV08OD3alCNbbOq/9BhlrIxWmeD4doZnK1mloFItNvw+eeWjsL9DyZNks7v9LKAHeNjBnDEmj33cInIGYKZxnGpOBbLKA5AZi9Y4D3BefA5yQKEk3gu25ZcqvqvvZ4kQMjV8u9VDB0z2lxOAMIpxvMXw0uvV65clRVr1tgBL2YI3Cr2L96fOElH6Z/kHZ1teRaANFUX1J/HRc4XS+4t2rVPaCdubt5iJe1dJZ6uIEd+OuqVDhN5ZwCVtjqQABBWEd0eCDMVwKTPiF/6DQ73mSM2iFt36Gibsq+3bGXLvuyzsD+SOrPGL6oLUo38xElUzrs4eU1mdenylSh1fQBxwfmpmeW8qlV25UsHlsiZxYlTjc+uecv2Oq6p4zYDBFq8fLl2RmEbgZICSEMdjXkHexC2y63uCOnprHYd0ZkIwkXqO3Cw+ePcZ9kTYyc+IBvVDxCWfvHBLWj0BYEYDaMhMt9qgGR8LMZWnlw2NIQ706Pvu1L4idDZD97DYEK9+PnEeex7EAsgfxAg7bp0kTRZslmQ728nbUDfJcpFBgg0ZORoyaC6dO1NCiDIQj3BWYJYg30mt2iB7NRF1gDxKH1tdhMACGdo2FS2tvqYwP66AcKscPlY+OAPdPrjcmr0f7Hfr5w4IKcX1JK4Yff9S84gEP4n8QobbxhzJIC8/EaT0MqLKtUxKx816zeQw14Hn1KA4Dpw1tqVccbOMmoQIBgYsQad55j30x6euaUAGa3GmOMxmTrjY+9KiJgxM6nxG3B97g6jOu1D725FCP1cA5CuXU1e5PO3k2cjAcTNxhBxV/O32kr6R0P7V0kBhJU+Mo79RNZ12key2Tv8bhr1oGPk5nokgPDdgr+kftDaE5Q5eoB4wfnJ0em9akN09cLJULzR6w45vaienByXw34/rkF6/NRi14DkdgGEjcApvjMRxAocCMJg8WsjASRobEzPrKq4DgYgPfr2u2YHH8UGAfLVN9+YS9WoSTNzW+AmrdpYygwdeKsBMmjECMtM/nTjRu+K2OYje0TOmIL1BDkSQKbNnGXuyqvNmie0E6O3eEflCAKk39ChiY4ekBVBEE2bcaMiAeR/77pHfvjxR7sGXbhwMeH8SEpyRwIIh8nwDJy8CTKr9xA1QNzS7vnNY71qVW7lC9sm275HKCD/LwMEK1jnNnSXy6cOStzQe8zwE+q5TQD5dOPnUjSQM8SO7fMvh07J/doAYSXnqBoSKSY/HT1qzEpOnwGD7PlbDZD+aph1G75sO9KOJk/7KGIOFYzLgcGSms4iB6COBBDcHtc+x6zksVFJHUGANH6zhS2IkJPmiDgRF5g9KT5s4QcIm5n0/cVL4fIbv/jSZgr0HpQ7yJEAQj8QW/llZjZj4SA6gHizR2z///WqDNOJMRlsxrAyauCUu7B1krYplONESol/yfd2AWSDAuRP992vo0ML70qI1n/2me0nEHg6+jUAkhSN1cCXuORWA+S9IYPNuP1JiLhXuJtBQ8OwO/fsLZu+/MrSdZZpUMtON3IHAZIUseJIbBAECGnq9CVJnP68sJlz55mLZd8W8AGEuIl34yY7sg9aKEBgv9yROBJAkqKnq1SNDiA2eygIzqxLfGKL3XA3e5hbpeC49G14WQ66cvpwAnCsrtsEELJG/6gAyRKTx85fOyKzlpTuvoMGeVd+HYD8ePiw5V7NnDNXZs2bb7xo6VJ5rUUre8+tBgiuDWfMd/g+1PDhjOmWnxZ8H0AYO35iwhcRfzp63IyMne0gQDiiS2LjLDVw187lK1dZ8IxfHwQIK0Z8lokZKfhdM2YXdHZF+whyMwj69c8g7FcQt9zoDLJz9x5LaJ01LyzzMk/mqAECEK5eSZz5emZp41A2LkY/IrVcOhgh61KVenputYRY5HYChBQSM8TCRdV4w3sUsbFxsnlL+HObvwZAlq8OjbqM0Cxnwo8XLJywU36rATJw+HDLYfvy63AuHRt4nLUI1gFARr4/zr5aCH1/6EeLEyIB5J1+/cxNw3937UQXbJyS5RAJIKyIISMnIw8eDGcFs7m7e8++RABhlfAP99x3zd5HlphcBrIbiUHYbUcGFlH8MlM+ZYB4s4N/addIDd9mDgx+TEbvYmT6+dCncrRjqL7bDRAUSMzBGQd3mIpdY3aXHf0aAFm8bJkCoJjJzX3Hzi241QBhFYssAnag/dR7wAB7htUg9/z1AOTtnj3kYXWDMFZ/O03vyQAEPZBnhVtz2XcEwX92xgXpxEFk8fqJr7uw4BIJJLyXeInrkQDCihjPouegzCkCxECgMcTl2PBUDF3YNSNRcE4WL1m6cUP+LmdWNPNKeXT5gsRPKRBKhb/NAOFZOoPRjLVx96kbP/0aAJm/aKHlPhF4ukQ9GCOjLZEAMlk7Pb3WF3yG5WY61A+QI0eOWvYxKzz+suiD9JtrADJmtBkAK2lHj4UNlrMaI8d+YB+x5nna9j933iMDh42Us+dCH5JLDiCt3+5osQa69ssBoFlWTw4gyEM5zt5EIgcQ2k9GcJBYsqZfiV2QGx3x5cXiOnO369zFBkaWr4MA4TTp7+68O5G8MM8nDxA3Q4y436sqTPGT85nBWxmvnDEBe7/feaVChOd6cdsUOdbFq+82AwSmQ1jPp4OC9GsAhDQXzlwsWbFS/dvVxivWrJXZ8xfY6UOXauIHCHHL6rXrZemKVQnPrP10gwGDE4Z8w9YB5NLFS/LV5s22I+3K8jEKZqFSFSpInQYvXwOQbHlCH7yeOTd82tAR7ta4yZPVWHtL9z59ZOuOHTbTQskBhHMeKzSW4JBTgsz/+NTOa+AGcSQ4KYCgO36iz6kRvn7vAILMzGrzfGk5juJOnpSJU6ZKJ9UR/1pi+85dCQF9+uw6m2qfBgFCCgtLvcQdTma+dDNI3dAUAXJMY4fzW8JnvyH2Po51DgEj+IxdUz638V2vdIiuXjorcQP/ZKD6VwAIoxXlHs1bwP5XhZ9+DYAkRSfj46VVx7dtlA8CJCnCePi4M+kQDiBJ0dHjx6Vq3dDZiSBAsucLHXjio9esGkVLJ07EW/wSCSBJEYEvmQScuU8OILBLYedwm58cQJwLhM4YYKIlZiYGIj7AFw1xtDdZgDj3Kkhnlje14DzJZ/ooCNTlCtL5b8aaWxY35C7vSphOjst+3QCpWK2m93SIPp4zNwEgBUqXts91OtqhI4kfIDAgwUAKlnrCRg9Hp9ToSDiMBBA+x3NBR2tH/YYMiwgQMnP936JKjkirJss4T/GS9n3dlGiuAj9Lrtw2KqdEfAaoVv2G8sLLr0hsXDhJkNmBYBRZ0RcrSS3btpejsckb+8EfDknH7t0tCKfd/DMef8yQFPEvGHLkLyAly1VMpD/ytNi59wOEfqF/C5Yqo25dKBkTOn481gY0ZHZ6RgY2JlNKKh2mcQYuFvEY3/uKhr7+ZmsUAFGjPTE+Rk5NLaZcVE6MyxbaOWemiPBMgsulIDk+4I9yalpJif+wqJz6sIi5atTH/bhRabW+Enq9sAb5mULLxHo9WoCgUE651Wn4suUT4X+zSkSQxj18aPY3SA2By1WulijwdBwCSTbLpaqtrk6NevXtuGykNHP+ZgOL7Nsa9etL1edfsLPdGJi/HHU+/Hguk4evdlRDvghcvV49O+mYr1joG70YSpmKKnODBhHLw9TnvlhCMl2VunWtnkhlaQuy5igQWlF6pmZNu2ZfEin7lGTU91EPTMCO/86oTJImO+HkKPHfngAiO83oFIN0Z27QBytWdkJQ640kA0x7SpevZMeH7TRo7bomB/rOo213OgvqEGMuVbGS9S3ln6lZS/iair8sctCvDIwly5e3GWnE+x+Y3ICPIwvIzOBGWbObPPlMB2Y3STD9ixuZcgwCY9QYMOwZeMTyjt1zgMQ9B/N3CnVGCxCURGPpLE7uoSQbCfW6Y4yOe3ByS4Bcp7MT6tKyGEywPH+7DnHv5LlI5WDkce9Piv11RPuMayfPOVmSYqtfZYZpl7vu15VfZtrHPQwKd4SgOVXG0Ik/jhZz35WFo5EBdu8z/Tk5Am3369DJRL+5fnF9GCzL39TLfVbC2NhEbjwAZAvKbDJEIXOarNnk/wFkhig7TnxhKgAAAABJRU5ErkJggg==";

	
	$(document).ready(function(){
		if($("#aisptools").length>0){
			$("#aisptools").remove();
			return;
		}
		$("body").prepend("<div id='aisptools' style='background-color:black;padding:5px;border-bottom:1px solid white;'></div>");
		
		AddLogo();
		AddButton("Get properties of current web","GetPropertiesOfWeb.js");
		AddButton("Set property on current web","SetPropertyOnWeb.js");
		AddButton("Hack date of list item","HackDate.js");
		AddButton("Get current library/list Guid (console)","GetCurrentLibraryGuid.js");
		AddButton("Get custom actions (console)","GetCustomActions.js");
		AddButton("Delete custom action","DeleteCustomAction.js");
		AddButton("Delete ALL custom action","DeleteAllCustomActions.js");
		AddButton("Get Event Receivers On Current Web","GetEventReceiversOnWeb.js");



		AddClearFloat();
	})

	
	function AddLogo(){
		$("#aisptools").append(function(){
			return $("<img></img>").css("float","left").attr("src",logo);
		});
	}
	
	function AddClearFloat(){
		$("#aisptools").append(function(){
			return $("<div></div>").css("clear","both");
		});
	}

	function AddButton(text, scriptFile){
		$("#aisptools").append(function(){
			return $("<a></a>")
			.css("display","inline-block")
			.css("float","left")
			.css("padding", "5px")
			.css("text-align","center")
			.css("margin-top", "17px")
			.css("margin-left","5px")
			.css("color","white")
			.attr("href","#")
			.text(text)
			.click(function(){InjectJs(hostUrl+scriptFile)});
		});
	}

	(function() {
    		SP.ContentTypeCollection.prototype.forEach = function (t) { for (var o = this.getEnumerator() ; o.moveNext() ;) t(o.current); };
    		SP.ContentTypeCollection.prototype.first = function (t) { var first = null; this.forEach(function (i) { if (first == null && t(i)) first = i; }); return first; };
    		SP.UserCustomActionCollection.prototype.forEach = function (t) { for (var o = this.getEnumerator() ; o.moveNext() ;) t(o.current); };
    		SP.UserCustomActionCollection.prototype.first = function (t) { var first = null; this.forEach(function (i) { if (first == null && t(i)) first = i; }); return first; };
    		SP.WebCollection.prototype.forEach = function (t) { for (var o = this.getEnumerator() ; o.moveNext() ;) t(o.current); };
    		SP.ClientContext.prototype.executeQueryAsyncPromise = function () { var e = $.Deferred(); var t = arguments; this.executeQueryAsync(function () { e.resolve.apply(this, t); }, function (a, b) { console.log(a); console.log(b); e.reject(a, b); }); return e; };
			
	})();
	
	
});


function InjectJs(scriptUrl){
	document.getElementsByTagName('head')[0].appendChild(
		document.createElement('script')
	).src=scriptUrl + '?ver=' + Math.random();
}

InjectJs("https://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.0.2.min.js");

setTimeout(bootstrap,500);
