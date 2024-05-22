import React from "react";
import i from "/near_here/star.png";
import Nav from "../components/navBar";
import Footer from "../components/footer";
const attractionPlaces = [
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipODJHHyo2Kjy0nXfSOUiQGVBSLDxHSv9Qq3noai=w148-h148-n-k-no",
    place_name: "Galle Dutch Fort",
    place_rating: "4.7\n(16K)",
    place_type: "Fortress",
    search_link:
      "https://www.google.com/search?sa=X&sca_esv=19fb95802b09d0d0&biw=1536&bih=695&q=Galle+Dutch+Fort&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1WAjPNso2zDbUUs5Ot9HPykxNLMvPz4AyrxJKSosRkELN4EauAe2JOTqqCS2lJcoaCW35RCQDEWm3ITgAAAA&ved=2ahUKEwinpueI7JKGAxX2F1kFHeomBjwQ2coHegQIIRAD",
  },
  {
    place_image:
      "https://lh6.googleusercontent.com/proxy/34IbAM35NQaA6C3f4pFOJHsZOLSyemFPrew2-w8Dwtc3O2j0H9_3RdUml4CFrGKBdS5xfvDxnSG62bRAJiF425tePgrnDlNyR_PWTVXYB3Rs6NGH2VXin1S4KlUVs2dxzaCrQfUfokTO_B9lDhjz16gn59GRc1w=w148-h148-n-k-no",
    place_name: "Lighthouse - Galle",
    place_rating: "4.6\n(4K)",
    place_type: "Tourist attraction",
    search_link:
      "https://www.google.com/search?sa=X&sca_esv=19fb95802b09d0d0&biw=1536&bih=695&q=Lighthouse+-+Galle&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4gIxTQyNiotLtBSzk630c_KTE0sy8_PgDKvEkpKixGQQs3gRq5BPZnpGSUZ-aXGqgq6Ce2JOTioAlXHjWVEAAAA&ved=2ahUKEwinpueI7JKGAxX2F1kFHeomBjwQ2coHegQIIBAD",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipPuco7k02BFXA2r8gow7VYYXq9FZm2GKIy-Vffs=w148-h148-n-k-no",
    place_name: "Galle Fort Clock Tower",
    place_rating: "4.6\n(3.1K)",
    place_type: "Historical landmark",
    search_link:
      "https://www.google.com/search?sa=X&sca_esv=19fb95802b09d0d0&biw=1536&bih=695&q=Galle+Fort+Clock+Tower&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4gYxDY1MM0zizbQUs5Ot9HPykxNLMvPz4AyrxJKSosRkELN4EauYe2JOTqqCW35RiYIzUEm2Qkh-eWoRAP6vMllWAAAA&ved=2ahUKEwinpueI7JKGAxX2F1kFHeomBjwQ2coHegQIHxAD",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipOL-qk9LVP4icXyRIhCegfJdvNxMnEgpL_2iOD3=w148-h148-n-k-no",
    place_name: "Sea Turtle Hatchery Centre, Mahamodara",
    place_rating: "4.4\n(1.3K)",
    place_type: "Wildlife rescue service",
    search_link:
      "https://www.google.com/search?sa=X&sca_esv=19fb95802b09d0d0&biw=1536&bih=695&q=Sea+Turtle+Hatchery+Centre,+Mahamodara&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tVP1zc0TKlIyjXJSk7RUsxOttLPyU9OLMnMz4MzrBJLSooSk0HM4kWsasGpiQohpUUlOakKHoklyRmpRZUKzql5JUWpOgq-iRmJufkpiUWJALlCNHJoAAAA&ved=2ahUKEwinpueI7JKGAxX2F1kFHeomBjwQ2coHegQIHhAD",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipO_ufZCcaU5ovX9d5270D_exqcFT9ofyfSEEmmL=w148-h148-n-k-no",
    place_name: "Old Dutch Hospital",
    place_rating: "4.5\n(1.3K)",
    place_type: "Shopping mall",
    search_link:
      "https://www.google.com/search?sa=X&sca_esv=19fb95802b09d0d0&biw=1536&bih=695&q=Old+Dutch+Hospital&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4gYxDY2MM6oq07QUs5Ot9HPykxNLMvPz4AyrxJKSosRkELN4EauQf06KgktpSXKGgkd-cUFmSWIOANJW-rpSAAAA&ved=2ahUKEwinpueI7JKGAxX2F1kFHeomBjwQ2coHegQIHRAD",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipPdzeMvSHlkoa-JrmzFXUvYH4_-V9vlBi48YqFr=w148-h148-n-k-no",
    place_name: "Maritime Museum",
    place_rating: "4.2\n(897)",
    place_type: "Maritime museum",
    search_link:
      "https://www.google.com/search?sa=X&sca_esv=19fb95802b09d0d0&biw=1536&bih=695&q=Maritime+Museum&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1WAjPNirNzTLQUs5Ot9HPykxNLMvPz4AyrxJKSosRkELN4ESu_b2JRZklmbqqCb2lxamkuAGJGvgRNAAAA&ved=2ahUKEwinpueI7JKGAxX2F1kFHeomBjwQ2coHegQIHBAD",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipP0Ku5elRGE5KDJkEzQhGAUR6uAhViUHGH9VN_l=w148-h148-n-k-no",
    place_name:
      "Galle International Cricket Stadium - ගාල්ල ජාත්‍යන්තර ක්‍රිකට් ක්‍රිඩාංගනය",
    place_rating: "4.5\n(1.8K)",
    place_type: "Cricket ground",
    search_link:
      "https://www.google.com/search?sa=X&sca_esv=19fb95802b09d0d0&biw=1536&bih=695&q=Galle+International+Cricket+Stadium+-+%E0%B6%9C%E0%B7%8F%E0%B6%BD%E0%B7%8A%E0%B6%BD+%E0%B6%A2%E0%B7%8F%E0%B6%AD%E0%B7%8A%E2%80%8D%E0%B6%BA%E0%B6%B1%E0%B7%8A%E0%B6%AD%E0%B6%BB+%E0%B6%9A%E0%B7%8A%E2%80%8D%E0%B6%BB%E0%B7%92%E0%B6%9A%E0%B6%A7%E0%B7%8A+%E0%B6%9A%E0%B7%8A%E2%80%8D%E0%B6%BB%E0%B7%92%E0%B6%A9%E0%B7%8F%E0%B6%82%E0%B6%9C%E0%B6%B1%E0%B6%BA&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1WAjNN4jMySrQUs5Ot9HPykxNLMvPz4AyrxJKSosRkELN4EWs_o3tiTk6qgmdeSWpRHlhBYo6Cc1FmcnZqiUJwSWJKZmmugq7Cg21zHmzvf7Bt74PtXUASyF8E5q8F8h819D7YtuvBto1gubUPtu0GSs-CSex-sH0SiLttOVAEU2Il2JgmkPlAA7btAgA1rGB0zgAAAA&ved=2ahUKEwinpueI7JKGAxX2F1kFHeomBjwQ2coHegQIGxAD",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipMRCZVgCkGfE8m3fsI5Am_qrAKq1FyMr8p4ziOs=w148-h148-n-k-no",
    place_name: "Dutch Reformed Church",
    place_rating: "4.5\n(295)",
    place_type: "Reformed church",
    search_link:
      "https://www.google.com/search?sa=X&sca_esv=19fb95802b09d0d0&biw=1536&bih=695&q=Dutch+Reformed+Church&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4gYxDQ0LKiwt07QUs5Ot9HPykxNLMvPz4AyrxJKSosRkELN4EauoS2lJcoZCUGpaflFuaoqCc0ZpUXIGAGTSGDtVAAAA&ved=2ahUKEwinpueI7JKGAxX2F1kFHeomBjwQ2coHegQIGhAD",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipOAw3e_wWXxoXcUID1kfTlRCfjRS3d_TozPOrgR=w148-h148-n-k-no",
    place_name: "Flag Rock Bastion | Galle Dutch Fort",
    place_rating: "4.5\n(445)",
    place_type: "Historical landmark",
    search_link:
      "https://www.google.com/search?sa=X&sca_esv=19fb95802b09d0d0&biw=1536&bih=695&q=Flag+Rock+Bastion+%7C+Galle+Dutch+Fort&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tVP1zc0TDLPMTcqSyvSUsxOttLPyU9OLMnMz4MzrBJLSooSk0HM4kWsKm45iekKQfnJ2QpOicUgQYUaBffEnJxUBZfSkuQMBbf8ohIAed3dP2YAAAA&ved=2ahUKEwinpueI7JKGAxX2F1kFHeomBjwQ2coHegQIGBAD",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipOixJ1uaBlHufR1Uv0N3lWj8CcIh3wSw_TyrI1S=w148-h148-n-k-no",
    place_name: "Japanese Peace Pagoda - Rumassala",
    place_rating: "4.7\n(2.1K)",
    place_type: "Buddhist temple",
    search_link:
      "https://www.google.com/search?sa=X&sca_esv=19fb95802b09d0d0&biw=1536&bih=695&q=Japanese+Peace+Pagoda+-+Rumassala&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tFP1zc0TE5LMykpMNBSzE620s_JT04syczPgzOsEktKihKTQcziRayKXokFiXmpxakKAamJyUAyMT0_JVFBVyGoNDexuDgxJxEAV_OSAGIAAAA&ved=2ahUKEwinpueI7JKGAxX2F1kFHeomBjwQ2coHegQIFxAD",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipPzCe4NyRa4_LTTQgzv4cWaqB5Rp5dG_-TiJ9nW=w148-h148-n-k-no",
    place_name: "Historical Mansion Museum",
    place_rating: "4.4\n(224)",
    place_type: "Museum",
    search_link:
      "https://www.google.com/search?sa=X&sca_esv=19fb95802b09d0d0&biw=1536&bih=695&q=Historical+Mansion+Museum&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tZP1zcsSUmvLMxJ0VLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzOJFrJIemcUl-UWZyYk5Cr6JecVAUQXf0uLU0lwA1bq0AVkAAAA&ved=2ahUKEwinpueI7JKGAxX2F1kFHeomBjwQ2coHegQIGRAD",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipMCvbOpxQqQLooWWilW_G3x8uMNp2L9vYuH-Nvk=w148-h148-n-k-no",
    place_name: "National Museum Galle",
    place_rating: "4.3\n(260)",
    place_type: "History museum",
    search_link:
      "https://www.google.com/search?sa=X&sca_esv=19fb95802b09d0d0&biw=1536&bih=695&q=National+Museum+Galle&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4gYxDY2TU7KNzLQUs5Ot9HPykxNLMvPz4AyrxJKSosRkELN4EauoH1gwMUfBt7Q4tTRXwT0xJycVAExN-N5VAAAA&ved=2ahUKEwinpueI7JKGAxX2F1kFHeomBjwQ2coHegQIFhAD",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipPDiaAn3B5yHI3VpXo9FoZ4s1f0QCy_RQecBeBt=w148-h148-n-k-no",
    place_name: "Meeran Jumma Mosque",
    place_rating: "4.5\n(74)",
    place_type: "Mosque",
    search_link:
      "https://www.google.com/search?sa=X&sca_esv=19fb95802b09d0d0&biw=1536&bih=695&q=Meeran+Jumma+Mosque&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tVP1zc0LDBIKqs0SavUUsxOttLPyU9OLMnMz4MzrBJLSooSk0HM4kWswr6pqUWJeQpepbm5iQq--cWFpakAAMeaIlUAAAA&ved=2ahUKEwinpueI7JKGAxX2F1kFHeomBjwQ2coHegQIFRAD",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipNA7tDbKLZf1ked6n8ge8NHKlHbOCjjmzHsAMq9=w148-h148-n-k-no",
    place_name: "Sri Sudharmalaya Buddhist Temple",
    place_rating: "4.7\n(269)",
    place_type: "Buddhist temple",
    search_link:
      "https://www.google.com/search?sa=X&sca_esv=19fb95802b09d0d0&biw=1536&bih=695&q=Sri+Sudharmalaya+Buddhist+Temple&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tZP1zcsyUvKyi7K0VLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzOJFrArBRZkKwaUpGYlFuYk5iZWJCk6lKSkZmcUlCiGpuQU5qQBuJXV_YAAAAA&ved=2ahUKEwinpueI7JKGAxX2F1kFHeomBjwQ2coHegQIExAD",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipMZcj_7b6lspWGzqgaLpzhdBixF15ozebralKJG=w148-h148-n-k-no",
    place_name: "St. Mary's Cathedral",
    place_rating: "4.7\n(259)",
    place_type: "Catholic cathedral",
    search_link:
      "https://www.google.com/search?sa=X&sca_esv=19fb95802b09d0d0&biw=1536&bih=695&q=St.+Mary%27s+Cathedral&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4gIxjZPTyyzMtBSzk630c_KTE0sy8_PgDKvEkpKixGQQs3gRq0hwiZ6Cb2JRpXqxgnNiSUZqSlFiDgCcM8YwUwAAAA&ved=2ahUKEwinpueI7JKGAxX2F1kFHeomBjwQ2coHegQIFBAD",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipN2lDJCvd_VWu3jWJpAzyPHpvMy3Mz8Ksi4m2Pv=w148-h148-n-k-no",
    place_name: "Lighthouse Beach",
    place_rating: "4.4\n(91)",
    place_type: "Outdoor swimming pool",
    search_link:
      "https://www.google.com/search?sa=X&sca_esv=19fb95802b09d0d0&biw=1536&bih=695&q=Lighthouse+Beach&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tVP1zc0TC42ya7MKsnWUsxOttLPyU9OLMnMz4MzrBJLSooSk0HM4kWsAj6Z6RklGfmlxakKTqmJyRkAULl3r1IAAAA&ved=2ahUKEwinpueI7JKGAxX2F1kFHeomBjwQ2coHegQIEBAD",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipP8sFFUHgVDGDZIfOIW8L0RD4mJ4ne4PxsF_vgb=w148-h148-n-k-no",
    place_name: "All Saints' Church",
    place_rating: "4.5\n(134)",
    place_type: "Anglican church",
    search_link:
      "https://www.google.com/search?sa=X&sca_esv=19fb95802b09d0d0&biw=1536&bih=695&q=All+Saints%27+Church&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4gYxDQ2LC4oMc7QUs5Ot9HPykxNLMvPz4AyrxJKSosRkELN4EauQY06OQnBiZl5JsbqCc0ZpUXIGALcIlypSAAAA&ved=2ahUKEwinpueI7JKGAxX2F1kFHeomBjwQ2coHegQIDxAD",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipMzIHEyR5a_dHTYA7xWi5XcyOwbpDTwYWXKeqa2=w148-h148-n-k-no",
    place_name: "Yatagala Raja Maha Viharaya",
    place_rating: "4.7\n(670)",
    place_type: "Buddhist temple",
    search_link:
      "https://www.google.com/search?sa=X&sca_esv=19fb95802b09d0d0&biw=1536&bih=695&q=Yatagala+Raja+Maha+Viharaya&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tZP1zcsSalILjTN1VLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzOJFrNKRiSWJ6Yk5iQpBiVmJCr6JGYkKYZkZiUWJlYkAG_YKClsAAAA&ved=2ahUKEwinpueI7JKGAxX2F1kFHeomBjwQ2coHegQIEhAD",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipPK4o_kLgzxqV2Kf4uZhu8bE75mqm1XwNsIyGab=w148-h148-n-k-no",
    place_name: "Jungle Beach",
    place_rating: "4.4\n(2.3K)",
    place_type: "Beach",
    search_link:
      "https://www.google.com/search?sa=X&sca_esv=19fb95802b09d0d0&biw=1536&bih=695&q=Jungle+Beach&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tFP1zcsNDNKMzONT9dSzE620s_JT04syczPgzOsEktKihKTQcziRaw8XqV56TmpCk6pickZAClF0oFNAAAA&ved=2ahUKEwinpueI7JKGAxX2F1kFHeomBjwQ2coHegQIERAD",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipNzY--0VE56cHqygvTfHag6iNvASFm5mvdABIs=w148-h148-n-k-no",
    place_name: "Sinharaja Forest Reserve",
    place_rating: "4.5\n(1.9K)",
    place_type: "National forest",
    search_link:
      "https://www.google.com/search?sa=X&sca_esv=19fb95802b09d0d0&biw=1536&bih=695&q=Sinharaja+Forest+Reserve&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1WgjCLLbIztBSzk630c_KTE0sy8_PgDKvEkpKixGQQs3gRq0RwZl5GYlFiVqKCW35RanGJQlBqcWpRWSoANN8AKVYAAAA&ved=2ahUKEwinpueI7JKGAxX2F1kFHeomBjwQ2coHegQIDRAD",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipM9zRFaQ2zrCzTF8cXwSKLpNCKI_FG_TPkcFnVK=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Unawatuna+Beach&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tZP1zcsKSmwKDLI01LMTrbSz8lPTizJzM-DM6wSS0qKEpNBzOJFrPyheYnliSWleYkKTqmJyRkAY-30Lk8AAAA&sa=X&ved=2ahUKEwjen5Ch7pKGAxUeFFkFHYPhCpYQ2coHegQIFRAD",
    place_name: "Unawatuna Beach",
    place_rating: "4.5\n(1.8K)",
    place_type: "Beach",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipP7hZb3nPnjfwDZyLkkxEF9EmamQB7oU3vtJObR=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Fort+Entrance+(Old+Gate)&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tVP1zc0TM4rSC8xScrWUsxOttLPyU9OLMnMz4MzrBJLSooSk0HM4kWsEm75RSUKrnlAobzkVAUN_5wUBffEklRNAK73l01aAAAA&sa=X&ved=2ahUKEwjen5Ch7pKGAxUeFFkFHYPhCpYQ2coHegQIFBAD",
    place_name: "Fort Entrance (Old Gate)",
    place_rating: "4.4\n(94)",
    place_type: "Tourist attraction",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipMG8ekAjj48mmHzQelmRNkrOOjWZq1QBPKrYnOA=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Rumassala+Sanctuary&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tFP1zfMSIlPySooL9JSzE620s_JT04syczPgzOsEktKihKTQcziRazCQaW5icXFiTmJCsGJecklpYlFlQDlz07QVAAAAA&sa=X&ved=2ahUKEwjen5Ch7pKGAxUeFFkFHYPhCpYQ2coHegQIExAD",
    place_name: "Rumassala Sanctuary",
    place_rating: "4.5\n(226)",
    place_type: "Nature preserve",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipMEzTjRdgsbqFq-MVfAchrAprf05XGWGJt1dvJM=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Eco+Friendly+River+Safari+%26+Canoeing+Excursion+Mahamodara&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tVP1zc0TDfLLavMMq3UUsxOttLPyU9OLMnMz4MzrBJLSooSk0HM4kWslq7J-QpuRZmpeSk5lQpBmWWpRQrBiWmJRZkKagrOiXn5qZl56QquFcmlRcVAHQq-iRmJufkpiUWJAOT3H9Z7AAAA&sa=X&ved=2ahUKEwjen5Ch7pKGAxUeFFkFHYPhCpYQ2coHegQIEhAD",
    place_name: "Eco Friendly River Safari & Canoeing Excursion Mahamodara",
    place_rating: "4.9\n(77)",
    place_type: "Boat tour agency",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipO3eLQQmhPaczKaR1NCWxYKK9wjxHjexMTlNYez=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Martin+Wickramasinghe+Folk+Museum&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tFP1zc0ysjNjq8wL9FSzE620s_JT04syczPgzOsEktKihKTQcziRayKvolFJZl5CuGZydlFibmJxZl56RmpCm75OdkKvqXFqaW5APH7_s1iAAAA&sa=X&ved=2ahUKEwjen5Ch7pKGAxUeFFkFHYPhCpYQ2coHegQIERAD",
    place_name: "Martin Wickramasinghe Folk Museum",
    place_rating: "4.7\n(1.1K)",
    place_type: "Museum",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipNXcAUwoMjpdWjkL6SlRS0OSVZS3-gB1bdV3Txs=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Dutch+Hospital+-+Shopping+Precinct&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4gIxLQzMLYqStBSzk630c_KTE0sy8_PgDKvEkpKixGQQs3gRq5JLaUlyhoJHfnFBZklijoKuQnBGfkFBZl66QkBRanJmXnIJAHiPCNdhAAAA&sa=X&ved=2ahUKEwjen5Ch7pKGAxUeFFkFHYPhCpYQ2coHegQIEBAD",
    place_name: "Dutch Hospital - Shopping Precinct",
    place_rating: "4.4\n(5.7K)",
    place_type: "Shopping mall",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipOBfTw0L5Sv7OhC60M_5Ex_NhTUP7JkSJJ0srgQ=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Natural+Silk+Factory&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tFP1zc0TE5LLywwzNBSzE620s_JT04syczPgzOsEktKihKTQcziRawifoklpUWJOQrBmTnZCm5A8fyiSgCKqDf1VQAAAA&sa=X&ved=2ahUKEwjen5Ch7pKGAxUeFFkFHYPhCpYQ2coHegQIDxAD",
    place_name: "Natural Silk Factory",
    place_rating: "4.2\n(120)",
    place_type: "Silk store",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipPQ6ftO0AcvuJPNstOjEdKu8zNWE7XYH2qlcXz6=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Lighthouse+Street&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tZP1zcsyU3OzstN0VLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzOJFrII-mekZJRn5pcWpCsElRampJQDS7ZJkUQAAAA&sa=X&ved=2ahUKEwjen5Ch7pKGAxUeFFkFHYPhCpYQ2coHegQIDhAD",
    place_name: "Lighthouse Street",
    place_rating: "4.6\n(9)",
    place_type: "Notable street",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipNDEJzo5XEVPLp-WPyk5l-vYbhOIXa6cz_llzv6=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Dalawella+Beach&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tFP1zc0ysjJTiowyNJSzE620s_JT04syczPgzOsEktKihKTQcziRaz8Lok5ieWpOTmJCk6pickZAIIuJ75QAAAA&sa=X&ved=2ahUKEwjen5Ch7pKGAxUeFFkFHYPhCpYQ2coHegQIDBAD",
    place_name: "Dalawella Beach",
    place_rating: "4.5\n(416)",
    place_type: "Beach",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipMmP_RgGVW_kOU7leabihq5wjjruP5VcquLPw0K=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Galle+Harbor&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4gYxDY1M4wuMMrQUs5Ot9HPykxNLMvPz4AyrxJKSosRkELN4ESuPe2JOTqqCR2JRUn4RAN3DcUhMAAAA&sa=X&ved=2ahUKEwjen5Ch7pKGAxUeFFkFHYPhCpYQ2coHegQIDRAD",
    place_name: "Galle Harbor",
    place_rating: "4.5\n(104)",
    place_type: "Harbor",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipNkHoMGkx4f8qCIqUBcJ2vqIr5hXz7InE98xlAg=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Unawatuna+Beach&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tVP1zc0LCmKr4zPKErWUsxOttLPyU9OLMnMz4MzrBJLSooSk0HM4kWs_KF5ieWJJaV5iQpOqYnJGQAec7oJUQAAAA&sa=X&ved=2ahUKEwjen5Ch7pKGAxUeFFkFHYPhCpYQ2coHegQICxAD",
    place_name: "Unawatuna Beach",
    place_rating: "4.5\n(134)",
    place_type: "Tourist attraction",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipOWjjdvu0SYLPDaz6WudEieLqIF50eDWQs4z6kc=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Sooriya+Weaving+Mills+-+Best+Handloom+sarees+and+Textile+in+Galle&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tVP1zc0TDbKK6zMSCvXUsxOttLPyU9OLMnMz4MzrBJLSooSk0HM4kWsjsH5-UWZlYkK4amJZZl56Qq-mTk5xQq6Ck6pxSUKHol5KTn5-bkKxYlFqanFCkCuQkhqRUlmTqpCZp6Ce2JOTioAsktyU4MAAAA&sa=X&ved=2ahUKEwjen5Ch7pKGAxUeFFkFHYPhCpYQ2coHegQIChAD",
    place_name:
      "Sooriya Weaving Mills - Best Handloom sarees and Textile in Galle",
    place_rating: "4.9\n(76)",
    place_type: "Outlet store",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipMhNYMHa72y1YnpjWCBrBe3jXvjhveMl9t97zbI=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Chameera+Cycling&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tFP1zcsKKksLEgqNNZSzE620s_JT04syczPgzOsEktKihKTQcziRawCzhmJuampRYkKzpXJOZl56QCuphAiUQAAAA&sa=X&ved=2ahUKEwjen5Ch7pKGAxUeFFkFHYPhCpYQ2coHegQIAxAD",
    place_name: "Chameera Cycling",
    place_rating: "4.5\n(33)",
    place_type: "Outdoor sports store",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipNIkcMX0EuzgQ2P4W952rYTQTGESi6XuE4c9V7G=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Hikkaduwa+Beach&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tZP1zcsSc_JSTLJ01LMTrbSz8lPTizJzM-DM6wSS0qKEpNBzOJFrPwemdnZiSml5YkKTqmJyRkAUDMrhE8AAAA&sa=X&ved=2ahUKEwjen5Ch7pKGAxUeFFkFHYPhCpYQ2coHegQICRAD",
    place_name: "Hikkaduwa Beach",
    place_rating: "4.5\n(1.3K)",
    place_type: "Beach",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipN3uEw0OIs_jbjNk3SjQBfL3FKBCESUkI4MnjU6=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Hikkaduwa+Lagoon+Safari+and+Adventure+kayaking&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tVP1zc0TDIzsyyxMDbSUsxOttLPyU9OLMnMz4MzrBJLSooSk0HM4kWseh6Z2dmJKaXliQo-ien5-XkKwYlpiUWZCol5KQqOKWWpeSWlRakK2YmVidmZeekAPgSgE3AAAAA&sa=X&ved=2ahUKEwjen5Ch7pKGAxUeFFkFHYPhCpYQ2coHegQIBxAD",
    place_name: "Hikkaduwa Lagoon Safari and Adventure kayaking",
    place_rating: "4.8\n(385)",
    place_type: "Boat tour agency",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipNsHpEAqtWMgCiav71NXD-zSUFbuQyM-VQ8U94=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Stilt+Fisherman&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tVP1zc0TCovKkkzMC_XUsxOttLPyU9OLMnMz4MzrBJLSooSk0HM4kWs_MElmTklCm6ZxRmpRbmJeQCOKBQ4UQAAAA&sa=X&ved=2ahUKEwjen5Ch7pKGAxUeFFkFHYPhCpYQ2coHegQICBAD",
    place_name: "Stilt Fisherman",
    place_rating: "3.8\n(459)",
    place_type: "Fishing pier",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipM4NLcRyJ2DQAqiyFtheLu9C4ZMKajbUFgHV71w=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Handunugoda+Tea+Estate&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4gIxk5MtDY1StBSzk630c_KTE0sy8_PgDKvEkpKixGQQs3gRq5hHYl5KaV5pen5KokJIaqKCa3FJYkkqAHuQjt5VAAAA&sa=X&ved=2ahUKEwjen5Ch7pKGAxUeFFkFHYPhCpYQ2coHegQIAhAD",
    place_name: "Handunugoda Tea Estate",
    place_rating: "4.3\n(366)",
    place_type: "Tea manufacturer",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipMciCtAxyjwybyTKbwNsDscjvItvgp6FG3cIGtp=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Mihiripenna+Beach&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tFP1zc0yikxtSwyNdFSzE620s_JT04syczPgzOsEktKihKTQcziRayCvpkZmUWZBal5eYkKTqmJyRkAdorwG1IAAAA&sa=X&ved=2ahUKEwjen5Ch7pKGAxUeFFkFHYPhCpYQ2coHegQIBRAD",
    place_name: "Mihiripenna Beach",
    place_rating: "4.6\n(186)",
    place_type: "Beach",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipP7MTnF31jIdZqWWGfqezMhoQrEC4ZOJzjnOs-M=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Mirissa+Beach&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tVP1zc0TDc2iDc2ME3WUsxOttLPyU9OLMnMz4MzrBJLSooSk0HM4kWsvL6ZRZnFxYkKTqmJyRkAJEC4IU8AAAA&sa=X&ved=2ahUKEwjen5Ch7pKGAxUeFFkFHYPhCpYQ2coHegQIBhAD",
    place_name: "Mirissa Beach",
    place_rating: "4.7\n(1.6K)",
    place_type: "Beach",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipMoOg97Jn5TZ6MMJ_GRWNlhanoYyS5c7Fpk8VIO=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Koggala+Beach&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tVP1zc0TDJLMjcwMSvXUsxOttLPyU9OLMnMz4MzrBJLSooSk0HM4kWsvN756emJOYkKTqmJyRkA4IQhjE8AAAA&sa=X&ved=2ahUKEwiqqo7V8ZKGAxXRFmIAHe3VBnEQ2coHegQICBAD",
    place_name: "Koggala Beach",
    place_rating: "4.6\n(291)",
    place_type: "Beach",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipOVSxH0ZZGRP6SiEdRtdiIxqyc70WgXNm4COoOa=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Narigama+Beach&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tZP1zcsyTI1MzMu11LMTrbSz8lPTizJzM-DM6wSS0qKEpNBzOJFrHx-iUWZ6Ym5iQpOqYnJGQAgtWXCTgAAAA&sa=X&ved=2ahUKEwiqqo7V8ZKGAxXRFmIAHe3VBnEQ2coHegQICxAD",
    place_name: "Narigama Beach",
    place_rating: "4.6\n(179)",
    place_type: "Beach",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipMJjcAFrhKVihknOq6PizDlObjlzk8ofIrGp9Ed=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Bentota+Ayurveda+Center&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tVP1zc0TEoqyiiJr7LQUsxOttLPyU9OLMnMz4MzrBJLSooSk0HM4kWs4k6peSX5JYkKjpWlRWWpKYkKzkCB1CIAplb8pFkAAAA&sa=X&ved=2ahUKEwiqqo7V8ZKGAxXRFmIAHe3VBnEQ2coHegQICRAD",
    place_name: "Bentota Ayurveda Center",
    place_rating: "4.7\n(198)",
    place_type: "Day spa",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipMcq6UifbEFpOBwOqwjJNnqBbc8PMPnsFhXzC2B=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Koggala+Lake&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tVP1zc0TKkqyDXPMYjXUsxOttLPyU9OLMnMz4MzrBJLSooSk0HM4kWsPN756emJOYkKPonZqQCgWpdXTgAAAA&sa=X&ved=2ahUKEwiqqo7V8ZKGAxXRFmIAHe3VBnEQ2coHegQIDRAD",
    place_name: "Koggala Lake",
    place_rating: "4.4\n(185)",
    place_type: "Lake",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipPXuoEd8KNACeHWS1cC41xhnbexR0hlOGPfm1U-=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Genuine+Batik+(Jungle+Workshop)&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tVP1zc0TM4zy403KDDVUsxOttLPyU9OLMnMz4MzrBJLSooSk0HM4kWs8u6peaWZeakKTkDJbAUNr9K89JxUhfD8ouzijPwCTQCN5qf_YQAAAA&sa=X&ved=2ahUKEwiqqo7V8ZKGAxXRFmIAHe3VBnEQ2coHegQIChAD",
    place_name: "Genuine Batik (Jungle Workshop)",
    place_rating: "4.9\n(48)",
    place_type: "Clothes and fabric manufacturer",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipMe92HDMdZ29IdMkG_indWmJ00KcFoDksGQMXlp=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Midigama+Beach&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tFP1zcsKDMoSSqoytZSzE620s_JT04syczPgzOsEktKihKTQcziRax8vpkpmemJuYkKTqmJyRkAvzEzkU8AAAA&sa=X&ved=2ahUKEwiqqo7V8ZKGAxXRFmIAHe3VBnEQ2coHegQIBBAD",
    place_name: "Midigama Beach",
    place_rating: "4.7\n(195)",
    place_type: "Beach",
  },
  {
    place_image:
      "https://lh3.googleusercontent.com/proxy/Q45QbcvlpixHCln3vKoQwwwNEDj318tR5nNWD_X6zzcTDRoVz9o7E10QYVAV93x09oWwUIrOAcMD6Bj-EblfJs70fOGBcctHD6faExOkc9j_aodbemMnvcS71vieACkrhWOVOMgK5aS0QYFdg11uamer47iPsA=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Spa+Oya+-+Arunalu+Lake+Front+Villa&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tVP1zc0TC4utCwwszTQUsxOttLPyU9OLMnMz4MzrBJLSooSk0HM4kWsSsEFiQr-lYkKugqORaV5iTmlCj6J2akKbkX5eSUKYZk5OYkAVF5kmWQAAAA&sa=X&ved=2ahUKEwiqqo7V8ZKGAxXRFmIAHe3VBnEQ2coHegQIDBAD",
    place_name: "Spa Oya - Arunalu Lake Front Villa",
    place_rating: "4.5\n(42)",
    place_type: "Massage spa",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipMDECZRunH75F6al9B05wDY18s0RnnqmoectLT6=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=WB+Sanka+Taxi+Tours+Hikkaduwa&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tVP1zc0TMsyKs5Lq0zXUsxOttLPyU9OLMnMz4MzrBJLSooSk0HM4kWssuFOCsGJedmJCiGJFZkKIfmlRcUKHpnZ2YkppeWJAKcJNiRfAAAA&sa=X&ved=2ahUKEwiqqo7V8ZKGAxXRFmIAHe3VBnEQ2coHegQIARAD",
    place_name: "WB Sanka Taxi Tours Hikkaduwa",
    place_rating: "5.0\n(36)",
    place_type: "Tour agency",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipNB7K4tl06Vuxdzgigi6VaJ1lv8pDAMQ-w4Gxel=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Norlanka+Travels&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tVP1zc0zDJLSkpONzTSUsxOttLPyU9OLMnMz4MzrBJLSooSk0HM4kWsAn75RTmJedmJCiFFiWWpOcUA_0cvdVIAAAA&sa=X&ved=2ahUKEwiqqo7V8ZKGAxXRFmIAHe3VBnEQ2coHegQIBRAD",
    place_name: "Norlanka Travels",
    place_rating: "5.0\n(2)",
    place_type: "Travel agency",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipNo-mN4LmQ__RsZt6GUsveCPNlu4arvrFQj314A=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Ample+Tours&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tVP1zc0TDfMKc-1NDHXUsxOttLPyU9OLMnMz4MzrBJLSooSk0HM4kWs3I65BTmpCiH5pUXFAMJ-fT5NAAAA&sa=X&ved=2ahUKEwiqqo7V8ZKGAxXRFmIAHe3VBnEQ2coHegQIBhAD",
    place_name: "Ample Tours",
    place_rating: "5.0\n(6)",
    place_type: "Tour agency",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipOXwaPR4rI8VAZFlX2AU4o2pJXzArJuoVOxsiK1=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Akurala+Beach&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tZP1zcsyUoqzMk20FLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzOJFrLyO2aVFiTmJCk6pickZAJEqz4pNAAAA&sa=X&ved=2ahUKEwiqqo7V8ZKGAxXRFmIAHe3VBnEQ2coHegQIAxAD",
    place_name: "Akurala Beach",
    place_rating: "4.6\n(279)",
    place_type: "Beach",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipNdmTehHYATbMGt_ckgcg3eXZxUMZqsc620Pc8N=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=Surf+School+Sri+Lanka&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tVP1zc0TEmpzMrLM83RUsxOttLPyU9OLMnMz4MzrBJLSooSk0HM4kWsosGlRWkKwckZ-fk5CsFFmQo-iXnZiQBPURLqVwAAAA&sa=X&ved=2ahUKEwiqqo7V8ZKGAxXRFmIAHe3VBnEQ2coHegQIBxAD",
    place_name: "Surf School Sri Lanka",
    place_rating: "4.9\n(65)",
    place_type: "Surf school",
  },
  {
    place_image:
      "https://lh5.googleusercontent.com/p/AF1QipP_AfLJWnCgnpS1_5LNsfdFd0MQ-IEjcsiOiwfl=w148-h148-n-k-no",
    search_link:
      "https://www.google.com/search?sca_esv=19fb95802b09d0d0&cs=0&q=The+Cinnamon+Experience+PVT+LTD&stick=H4sIAAAAAAAAAONgFuLUz9U3MDI3zs1W4tVP1zc0LDTKTsmuLCjWUsxOttLPyU9OLMnMz4MzrBJLSooSk0HM4kWs8iEZqQrOmXl5ibn5eQquFQWpRZmpecmpCgFhIQo-IS4AjCqgi2EAAAA&sa=X&ved=2ahUKEwiqqo7V8ZKGAxXRFmIAHe3VBnEQ2coHegQIAhAD",
    place_name: "The Cinnamon Experience PVT LTD",
    place_rating: "3.9\n(9)",
    place_type: "Garden",
  },
];
export default function Near_here() {
  return (
    <div>
      <style>
        {`

    .img {
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }

    .ditailsContainor {
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      background-color: rgb(215, 215, 215);
    }
    .wholeContainer{
      border-radius: 15px
    }
    .wholeContainer:hover{
      box-shadow: -1px -1px 4px #05062dc4, 1px -1px 4px #05062dc4, -1px 1px 4px #05062dc4, 1px 1px 4px #05062dc4;
    }
    
  `}
      </style>
      <Nav />
      <div className="container text-center">
        <h2 className="mt-5 fw-bolder" style={{ color: "#05062d" }}>
          Best Places to Visit Near Here
        </h2>
        <p style={{ color: "#05062d" }} className="fw-semibold mt-5">
          whether for a day, a weekend, or a week. While Galle is only 130
          square acres, there's no shortage of things to do! Filling your days
          with games, delicious eateries, and historical walls to walk around,
          you will have plenty to keep you busy on a visit to Galle.
        </p>
        <div className="row mt-5">
          {attractionPlaces.map((data, index) => {
            return (
              <a
                className="col-6 col-sm-4 col-md-3 col-lg-2 text-decoration-none"
                href={data.search_link}
                style={{ marginBottom: "15px" }}
              >
                <div className="wholeContainer bg-danger">
                  <img src={data.place_image} alt="" className="w-100 img" />
                  <div className="ditailsContainor container pb-2 pt-2">
                    <div className="fw-semibold">
                      <p
                        className="w-100"
                        style={{
                          color: "#05062d",
                          overflowWrap: "break-word",
                          textAlign: "start",
                        }}
                      >
                        {data.place_name}
                      </p>
                    </div>
                    <div className="containor d-flex gap-2 justify-content-start fw-semibold">
                      <img src={i} alt="" width={20} height={20} />
                      <p style={{ color: "#05062d" }}>{data.place_rating}</p>
                    </div>
                    <p
                      className="containor d-flex gap-2 justify-content-start fw-semibold"
                      style={{ color: "#05062d" }}
                    >
                      {data.place_type}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
